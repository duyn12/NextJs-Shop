import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import productApiRequest from "@/apiRequests/product";

export default async function ProductCategory() {
  const { payload } = await productApiRequest.getList()
  const productList = payload.data

  return (
    <>
      <div className=" p-4 border-solid border-2">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent className="pl-6">
            {productList.map((categoryId) => (
              <div key={categoryId.categoryName} className="flex items-center mb-2">
                <Checkbox id="terms" className="mr-2" />
                {categoryId.categoryName}
              </div>
            ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Software</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center mb-2">
                <Checkbox id="terms" className="mr-2" />
                Keyboards
              </div>
              <div className="flex items-center ">
                <Checkbox id="terms" className="mr-2" />
                Keyboards
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
function getDetail(arg0: number): { payload: any; } | PromiseLike<{ payload: any; }> {
  throw new Error("Function not implemented.");
}

