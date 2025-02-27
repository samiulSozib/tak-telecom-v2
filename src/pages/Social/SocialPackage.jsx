import PageMeta from "../../components/common/PageMeta";
import SocialPackageCard from "../../components/ecommerce/SocialPackageCard";

export default function SocialPackage() {
  return (
    <>
      <PageMeta
        title="Tak Telecom"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        <div className="col-span-12 space-y-6 xl:col-span-12">
            <div>
                <h3 className="text-black font-medium">Social Bundle</h3>
                <span className="text-sm text-gray-600">Product and Packages </span>
            </div>

            <SocialPackageCard/>

        </div>


        
      </div>
    </>
  );
}
