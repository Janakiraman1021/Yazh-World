"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/context";

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
  const { t } = useI18n();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const fields = useMemo(
    () =>
      [
        { key: "name", label: t.formName, type: "text", placeholder: t.formNamePlaceholder },
        { key: "email", label: t.formEmail, type: "email", placeholder: t.formEmailPlaceholder },
        { key: "subject", label: t.formSubject, type: "text", placeholder: t.formSubjectPlaceholder },
      ] as const,
    [t],
  );

  function validate(nextValues: FormValues) {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nextValues.name.trim()) nextErrors.name = t.formErrorName;
    if (!nextValues.email.trim()) {
      nextErrors.email = t.formErrorEmail;
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = t.formErrorEmailInvalid;
    }
    if (!nextValues.subject.trim()) nextErrors.subject = t.formErrorSubject;
    if (!nextValues.message.trim()) nextErrors.message = t.formErrorMessage;

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
          {t.formMessagePortal}
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
            {t.formProduct}
          </span>
          <select
            value={values.product}
            onChange={(event) => setValues((c) => ({ ...c, product: event.target.value }))}
            className="focus-ring mt-2 w-full rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#23261f] px-4 py-3 text-sm text-white transition focus:border-[#a8e063] focus:bg-[#282b24]"
          >
            <option value="general" className="bg-[#23261f] text-white">{t.formProductGeneral}</option>
            <option value="web" className="bg-[#23261f] text-white">{t.formProductWeb}</option>
            <option value="extension" className="bg-[#23261f] text-white">{t.formProductExtension}</option>
            <option value="desktop" className="bg-[#23261f] text-white">{t.formProductDesktop}</option>
            <option value="api" className="bg-[#23261f] text-white">{t.formProductApi}</option>
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="text-xs font-mono font-medium text-[#c6f19d] uppercase tracking-wider">
            {t.formMessage}
          </span>
          <textarea
            value={values.message}
            required
            rows={5}
            placeholder={t.formMessagePlaceholder}
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
          {t.formSubmit}
          <Send className="size-4" aria-hidden="true" />
        </button>

        {status === "success" && (
          <div className="flex items-center gap-2 text-xs font-medium text-[#c6f19d] bg-[#a8e063]/15 px-4 py-2 rounded-full border border-[#a8e063]/30">
            <CheckCircle2 className="size-4 text-[#a8e063]" />
            <span>{t.formSuccess}</span>
          </div>
        )}
      </div>
    </form>
  );
}
