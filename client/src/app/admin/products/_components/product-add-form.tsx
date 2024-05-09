"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useRef, useState } from "react";
import {
  CreateProductBody,
  CreateProductBodyType,
  ProductResType,
  UpdateProductBodyType,
} from "@/schemaValidations/product.schema";
import productApiRequest from "@/apiRequests/product";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
type Product = ProductResType["data"];
const ProductAddForm = ({ product }: { product?: Product }) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<CreateProductBodyType>({
    resolver: zodResolver(CreateProductBody),
    defaultValues: {
      name: product?.name ?? "",
      price: product?.price ?? 0,
      description: product?.description ?? "",
      img: product?.img ?? "",
      categoryId: 1,
      quantity: product?.quantity ?? 0,
    },
  });
  const img = form.watch("img");
  const createProduct = async (values: CreateProductBodyType) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file as Blob);
      const uploadImageResult = await productApiRequest.uploadImage(formData);
      const imageUrl = uploadImageResult.payload.data;
      const result = await productApiRequest.create({
        ...values,
        img: imageUrl,
      });

      toast({
        description: result.payload.message,
      });
      router.push("/admin/products");
      router.refresh();
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: form.setError,
      });
    } finally {
      setLoading(false);
    }
  };
  const updateProduct = async (_values: UpdateProductBodyType) => {
    if (!product) return;
    setLoading(true);
    let values = _values;
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file as Blob);
        const uploadImageResult = await productApiRequest.uploadImage(formData);
        const imageUrl = uploadImageResult.payload.data;
        values = {
          ...values,
          img: imageUrl,
        };
      }

      const result = await productApiRequest.update(product.id, values);

      toast({
        description: result.payload.message,
      });
      router.push("/admin/products");
      router.refresh();
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: form.setError,
      });
    } finally {
      setLoading(false);
    }
  };
  async function onSubmit(values: CreateProductBodyType) {
    if (loading) return;
    if (product) {
      await updateProduct(values);
    } else {
      await createProduct(values);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (error) => {
          console.log(error);
          console.log(form.getValues("img"));
        })}
        className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên</FormLabel>
              <FormControl>
                <Input placeholder="tên" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá</FormLabel>
              <FormControl>
                <Input placeholder="giá" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
             
                <SelectContent>
                {categoryId.map((categoryName) => (
                   <SelectItem  key={categoryName.categoryId} value="light">{categoryName}</SelectItem>
                ))}
               </SelectContent>
             
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số lượng</FormLabel>
              <FormControl>
                <Input placeholder="số lượng" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mô tả</FormLabel>
              <FormControl>
                <Textarea placeholder="mô tả" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hình ảnh</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFile(file);
                      field.onChange(
                        "http://localhost:3000/admin/" + file.name
                      );
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {(file || img) && (
          <div>
            <Image
              src={file ? URL.createObjectURL(file) : img}
              width={128}
              height={128}
              alt="preview"
              className="w-32 h-32 object-cover"
            />
            <Button
              type="button"
              variant={"destructive"}
              size={"sm"}
              onClick={() => {
                setFile(null);
                form.setValue("img", "");
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
              }}
            >
              Xóa hình ảnh
            </Button>
          </div>
        )}
        <Button type="submit" className="!mt-8 w-full">
          {product ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
        </Button>
      </form>
    </Form>
  );
};

export default ProductAddForm;
