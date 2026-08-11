"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";
import { site } from "@/lib/site";

/** Official PayPal payment-link button (form snippet from PayPal dashboard). */
export function PayPalDonate() {
  const { t } = useI18n();
  const buttonClass = `pp-${site.paypal.hostedButtonId}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <style>{`.${buttonClass}{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
        <form
          action={site.paypal.paymentUrl}
          method="post"
          target="_blank"
          className="inline-grid justify-items-center content-start gap-2"
        >
          <input
            className={buttonClass}
            type="submit"
            value={t.common.donate}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
            alt="Accepted cards and payment methods"
          />
          <p className="flex items-center gap-1.5 text-xs text-sand/70">
            Powered by
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
              alt="PayPal"
              className="h-3.5 w-auto"
            />
          </p>
        </form>
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-cream/15 pt-6">
        <p className="text-center text-sm text-sand/80">
          {t.donate.preferScan}
        </p>
        <div className="overflow-hidden rounded-md bg-cream p-3">
          <Image
            src="/brand/paypal-qr.png"
            alt="QR code — Donate to Hope Has No Borders. Scan to give with PayPal."
            width={200}
            height={220}
            className="h-auto w-44 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={site.paypal.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md border border-cream/30 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/20 focus-ring"
        >
          {t.donate.openPaypal}
        </a>
        <a
          href={site.paypalMeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md border border-cream/20 px-6 py-2.5 text-sm text-sand/85 transition-colors hover:text-cream focus-ring"
        >
          {t.donate.orPaypalMe}
        </a>
      </div>
    </div>
  );
}
