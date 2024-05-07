import ProductAddForm from "../_components/product-add-form";


export default function ProductAddPage() {
  return (
    <>
     <h1 className="text-2xl font-bold m-6">Thêm sản phẩm</h1>
    <div className="flex justify-center">
      <ProductAddForm />
    </div>
    </>
   
  )
}