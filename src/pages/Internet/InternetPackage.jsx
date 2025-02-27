import PageMeta from "../../components/common/PageMeta";
import InternetPackageCard from "../../components/ecommerce/InternetPackageCard";

export default function InternetPackage() {
  return (
    <>
      <PageMeta
        title="Tak Telecom"
        description=""
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        
        <div className="col-span-12 space-y-6 xl:col-span-12">
            <div>
                <h3 className="text-black font-medium">Internet Packages</h3>
                <span className="text-sm text-gray-600">Internet Packages </span>
            </div>

            <InternetPackageCard/>

        </div>


        
      </div>
    </>
  );
}
