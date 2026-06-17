"use client";

function getGivebutterConfig() {
  const widgetId = process.env.NEXT_PUBLIC_GIVEBUTTER_WIDGET_ID?.trim() ?? "";
  const campaignCode = process.env.NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_CODE?.trim() ?? "";

  return {
    // Dashboard form embed id (e.g. pXv4q7) — used as fallback
    widgetId,
    // Campaign code from the campaign title in Givebutter (recommended for giving-form)
    campaignCode: campaignCode || widgetId
  };
}

function DonationFormSetupNotice({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-[0_24px_70px_rgba(17,34,53,0.12)]">
      <p className="text-base font-bold leading-7 text-slate-600">{message}</p>
    </div>
  );
}

export function DonationForm() {
  const { campaignCode, widgetId } = getGivebutterConfig();

  if (!campaignCode) {
    return (
      <DonationFormSetupNotice message="Add NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_CODE or NEXT_PUBLIC_GIVEBUTTER_WIDGET_ID to .env.local." />
    );
  }

  return (
    <div className="min-h-[28rem] w-full">
      {/*
        Givebutter Form embed (Sharing → Widgets) provides:
        <givebutter-widget id="pXv4q7"></givebutter-widget>

        That tag requires Givebutter's widget API to load element config. For this campaign
        that API returns 404, which shows "error loading this widget."

        Givebutter's manual form embed uses the same library with:
        <givebutter-giving-form campaign="CAMPAIGN_CODE"></givebutter-giving-form>
      */}
      <givebutter-giving-form campaign={campaignCode} />
    </div>
  );
}
