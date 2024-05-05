import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductCategory() {
  return (
    <>
      <div className=" p-4 border-solid border-2">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent className="pl-6">
              <div className="flex items-center mb-2">
                <Checkbox id="terms" className="mr-2" />
                Keyboards
              </div>
              <div className="flex items-center mb-2">
                <Checkbox id="terms" className="mr-2" />
                Keyboards
              </div>
              <div className="flex items-center mb-2">
                <Checkbox id="terms" className="mr-2" />
                Keyboards
              </div>
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
