import { redirect } from "next/navigation";
import { defaultLocale } from "@/config/locales";

export default function IndexPage() {
  redirect(`/${defaultLocale}`);
}
