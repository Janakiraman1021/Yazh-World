"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  product: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  product: "general",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const fields = useMemo(
    () =>
      [
        { key: "name", label: "உங்கள் பெயர்", type: "text", placeholder: "எ.கா. கபிலன் செல்வன்" },
        { key: "email", label: "மின்னஞ்சல் முகவரி", type: "email", placeholder: "kabilar@example.com" },
        { key: "subject", label: "பொருள் / தலைப்பு", type: "text", placeholder: "எ.கா. யாழ் Extension முன்னோட்ட அணுகல்" },
      ] as const,
    [],
  );

  function validate(nextValues: FormValues) {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nextValues.name.trim()) nextErrors.name = "உங்கள் பெயரை உள்ளிடுங்கள்.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "மின்னஞ்சலை உள்ளிடுங்கள்.";
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = "சரியான மின்னஞ்சல் முகவரியை உள்ளிடுங்கள்.";
    }
    if (!nextValues.subject.trim()) nextErrors.subject = "பொருளை உள்ளிடுங்கள்.";
    if (!nextValues.message.trim()) nextErrors.message = "உங்கள் செய்தியை உள்ளிடுங்கள்.";

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("success");
    setValues(initialValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="living-card p-6 sm:p-10 border-[rgba(238,243,231,0.12)]"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="living-badge">
          <Sparkles className="size-3" />
          MESSAGE PORTAL
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className={field.key === "subject" ? "sm:col-span-2" : ""}>
            <span className="text-xs font-mono font-medium text-[#c6f19d] uppercase tracking-wider">
              {field.label}
            </span>
            <input
              type={field.type}
              value={values[field.key]}
              placeholder={field.placeholder}
              required
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
              onChange={(event) =>
                setValues((current) => ({ ...current, [field.key]: event.target.value }))
              }
              className="focus-ring mt-2 w-full rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#23261f] px-4 py-3 text-sm text-white transition placeholder:text-[#a4aaa0]/40 focus:border-[#a8e063] focus:bg-[#282b24]"
            />
            {errors[field.key] && (
              <span id={`${field.key}-error`} className="mt-1.5 block text-xs font-medium text-red-400">
                {errors[field.key]}
              </span>
            )}
          </label>
        ))}

        <label className="sm:col-span-2">
          <span className="text-xs font-mono font-medium text-[#c6f19d] uppercase tracking-wider">
            ஆர்வம் உள்ள தயாரிப்பு
          </span>
          <select
            value={values.product}
            onChange={(event) => setValues((c) => ({ ...c, product: event.target.value }))}
            className="focus-ring mt-2 w-full rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#23261f] px-4 py-3 text-sm text-white transition focus:border-[#a8e063] focus:bg-[#282b24]"
          >
            <option value="general" className="bg-[#23261f] text-white">பொதுவான விசாரணை (General Inquiry)</option>
            <option value="web" className="bg-[#23261f] text-white">01. யாழ் Web Platform (Tamil AI & 18+ Tools, LangLM)</option>
            <option value="extension" className="bg-[#23261f] text-white">02. யாழ் Chrome Extension (Browser AI Agent, e-Sevai, Students)</option>
            <option value="desktop" className="bg-[#23261f] text-white">03. யாழ் Computer Automation (Desktop AI Agent, Screen Vision)</option>
            <option value="api" className="bg-[#23261f] text-white">Developer API Hub & MCP Skills Upload</option>
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="text-xs font-mono font-medium text-[#c6f19d] uppercase tracking-wider">
            செய்தி / வினவல்
          </span>
          <textarea
            value={values.message}
            required
            rows={5}
            placeholder="உங்கள் தேவைகள், சந்தேகங்கள் அல்லது கூட்டாண்மை விருப்பங்களை இங்கு பகிருங்கள்..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            className="focus-ring mt-2 w-full rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#23261f] px-4 py-3 text-sm text-white transition placeholder:text-[#a4aaa0]/40 focus:border-[#a8e063] focus:bg-[#282b24]"
          />
          {errors.message && (
            <span id="message-error" className="mt-1.5 block text-xs font-medium text-red-400">
              {errors.message}
            </span>
          )}
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(238,243,231,0.08)] pt-6">
        <button
          type="submit"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-8 py-3.5 text-sm font-semibold text-[#23261f] shadow-[0_12px_28px_rgba(168,224,99,0.25)] transition hover:bg-white hover:scale-105"
        >
          செய்தி அனுப்புக
          <Send className="size-4" aria-hidden="true" />
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 text-xs font-medium text-[#c6f19d] bg-[#a8e063]/15 px-4 py-2 rounded-full border border-[#a8e063]/30">
            <CheckCircle2 className="size-4 text-[#a8e063]" />
            <span>நன்றி! உங்கள் செய்தி வெற்றிகரமாக பெறப்பட்டது. விரைவில் பதிலளிக்கிறோம்.</span>
          </div>
        )}
      </div>
    </form>
  );
}
