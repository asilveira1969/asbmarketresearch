const DEFAULT_RECIPIENT_EMAIL = "anastacio.silveira@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const payload = data.payload || {};
    const recipient = data.notificationEmail || DEFAULT_RECIPIENT_EMAIL;
    const formType = data.formType || "newsletter";
    const locale = data.locale || "en";
    const subject = getSubject(formType);
    const replyTo = typeof payload.email === "string" && payload.email.trim() ? payload.email.trim() : "";
    const body = buildBody({
      formType,
      locale,
      payload,
      sourceUrl: data.sourceUrl || "",
      userAgent: data.userAgent || "",
    });

    const options = {
      to: recipient,
      subject,
      body,
    };

    if (replyTo) {
      options.replyTo = replyTo;
    }

    MailApp.sendEmail(options);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(error) })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getSubject(formType) {
  if (formType === "contact") {
    return "New ASB Lead Request - Contact Form";
  }

  if (formType === "report-request") {
    return "New ASB Lead Request - Detailed Project Brief";
  }

  if (formType === "newsletter") {
    return "New ASB Newsletter Signup";
  }

  return "New ASB Form Submission";
}

function buildBody(data) {
  const payload = data.payload || {};
  const submittedFields = buildFieldLines(payload);
  const metadataLines = [];

  metadataLines.push(`Form type: ${data.formType || ""}`);
  metadataLines.push(`Locale: ${data.locale || ""}`);
  if (data.sourceUrl) {
    metadataLines.push(`Source URL: ${data.sourceUrl}`);
  }
  if (data.userAgent) {
    metadataLines.push(`User agent: ${data.userAgent}`);
  }
  metadataLines.push(`Submitted at: ${new Date().toISOString()}`);

  const lines = [
    "New lead submission received.",
    "",
    "Submitted fields:",
  ];

  if (submittedFields.length > 0) {
    lines.push(...submittedFields.map((line) => `- ${line}`));
  } else {
    lines.push("- None provided");
  }

  lines.push("");
  lines.push("Metadata:");
  lines.push(...metadataLines.map((line) => `- ${line}`));

  return lines.join("\n");
}

function buildFieldLines(payload) {
  const fieldOrder = Object.keys(payload);
  const lines = [];

  for (const key of fieldOrder) {
    const value = payload[key];
    if (value === undefined || value === null || String(value).trim() === "") {
      continue;
    }
    lines.push(`${getFieldLabel(key)}: ${String(value).trim()}`);
  }

  return lines;
}

function getFieldLabel(key) {
  const labels = {
    fullName: "Full Name",
    company: "Company / Startup / Project Name",
    email: "Email",
    phone: "Phone Number",
    phoneNumber: "Phone Number",
    message: "Research / Information Need",
    objective: "Project Objective",
    competitors: "Competitors to Analyze",
    timeline: "Timeline",
    budget: "Budget",
    notes: "Additional Notes",
    country: "Country / Market",
    industry: "Industry",
    consent: "Consent",
    name: "Name",
  };

  if (Object.prototype.hasOwnProperty.call(labels, key)) {
    return labels[key];
  }

  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
