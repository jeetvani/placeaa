const SponsoredAd = ({ ad }: { ad: any }) => {
  return (
    <div className="lg:mx-[90px] xl:mx-[120px] h-24  rounded-[20px] lg:h-[90px] xl:h-[100px] 2xl:h-[140px] relative">
      <img
        src={ad}
        alt="popularplacesad"
        className="h-full w-full rounded-[20px]"
        style={{ objectFit: "cover" }}
      />
      <div className="bg-white border rounded-full px-2 lg:px-[4px] lg:pt-[2px] lg:pb-[3px] max-w-fit absolute top-[8px] right-[11px]">
        <p className="lg:text-[12px] 2xl:text-[15px] text-sm font-[600] text-[#0F0E0E]">
          Sponsored
        </p>
      </div>
    </div>
  );
};

export default SponsoredAd;
