"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { services } from "@/lib/site";

export function RequestedServiceForm() {
  const params = useSearchParams();
  const id = params.get("service");
  const interest = params.get("interest");
  const match = services.find((service) => service.id === id);
  const requestedService =
    interest === "workspace" ? "Workspace platform" : match?.name;

  return <ContactForm requestedService={requestedService} />;
}
