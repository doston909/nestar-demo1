import { useRouter } from "next/router";

const PropertyDetail  = () => {
    const router = useRouter();
    const {productId} = router.query;
    return <div>PPROPERTY DETAIL {productId}</div>;
};

export default PropertyDetail;