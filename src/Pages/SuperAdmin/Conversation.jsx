import React, { useEffect } from "react";
import TabComponent from "../../Components/TabComponent";
import Channels from "../../Components/SuperAdmin/Conversation/Channels";
import ReferralCom from "../../Components/SuperAdmin/Conversation/ReferralCom";
import TransFee from "../../Components/SuperAdmin/Conversation/TransFee";
import CustomerServiceFee from "../../Components/SuperAdmin/Conversation/CustomerServiceFee";
import ProServiceFee from "../../Components/SuperAdmin/Conversation/ProServiceFee";

export default function Conversation() {
  useEffect(() => {
    document.title = "Pricing";
  }, []);
  const tabData = [
    { label: "Conversation Channels", content: <Channels /> },
    { label: "Referral commission ", content: <ReferralCom /> },
    { label: "Transection fees", content: <TransFee /> },
    // { label: "Customer service fee", content: <CustomerServiceFee /> },
    // { label: "Provider service fee", content: <ProServiceFee /> },
  ];
  return (
    <div>
      <div className="mb-2">
        <h2 className="font-semibold text-3xl">Pricing</h2>
        <p className="text-gray-600">
          Track and manage your pricing.
        </p>
      </div>
      <TabComponent tabs={tabData} />
    </div>
  );
}
