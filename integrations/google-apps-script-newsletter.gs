const DEFAULT_RECIPIENT_EMAIL = "anastacio.silveira@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const payload = data.payload || {};
    const recipient = data.notificationEmail || DEFAULT_RECIPIENT_EMAIL;
    const formType = data.formType || "newsletter";
    const locale = data.locale || "en";
    const subject = `[ASB] New ${formType} submission`;

    const lines = [
      `Form type: ${formType}`,
      `Locale: ${locale}`,
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
      `Industry: ${payload.industry || ""}`,
      `Consent: ${payload.consent || ""}`,
      `Source URL: ${data.sourceUrl || ""}`,
      `User agent: ${data.userAgent || ""}`,
      `Submitted at: ${new Date().toISOString()}`,
    ];

    MailApp.sendEmail({
      to: recipient,
      subject,
      body: lines.join("\n"),
    });

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(error) })).setMimeType(ContentService.MimeType.JSON);
  }
}
