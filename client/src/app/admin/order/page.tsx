"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, CirclePlus, EllipsisVertical, MoreHorizontal } from "lucide-react"
import { toast, useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316000,
    status: "Đang xử lý",
    email: "ken99@yahoo.com",
    product: ["Product1"],
  },
  {
    id: "3u1reuv4",
    amount: 242000,
    status: "Đang xử lý",
    email: "Abe45@gmail.com",
    product: ["Product1", "Product3"],
  },
  {
    id: "derv1ws0",
    amount: 837000,
    status: "Đang giao hàng",
    email: "Monserrat44@gmail.com",
    product: ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6"],
  },
  {
    id: "5kma53ae",
    amount: 874000,
    status: "Thất bại",
    email: "Silas22@gmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
  {
    id: "bhqecj4p",
    amount: 721000,
    status: "Tạm giữ",
    email: "carmella@hotmail.com",
    product: ["Product1", "Product2", "Product3"],
  },
]
type Status = "Đang xử lý" | "Tạm giữ" | "Đang giao hàng" | "Thất bại";
export type Payment = {
  id: string
  amount: number
  status: Status
  email: string
  product: string[]
}
const getStatusClassName = (status: Status): string => {
  switch (status) {
    case "Đang xử lý":
      return 'status-dang-xu-ly';
    case "Tạm giữ":
      return 'status-tam-giu';
    case "Đang giao hàng":
      return 'status-dang-giao-hang';
    case "Thất bại":
      return 'status-that-bai';
    default:
      return ''; // Default case to handle any potential oversight
  }
};
const StatusCell = ({ status }: { status: Status }) => (
  <div className={`capitalize ${getStatusClassName(status)}`}>
    {status}
  </div>
);
// Coppy mã đơn hàng
function handleButtonClick(paymentId: string) {

  navigator.clipboard.writeText(paymentId).then(() => {
    // Optionally, you can add a callback here if you want to notify the user that the ID has been copied successfully.
    toast({
      description: "Đã sao chép mã đặt hàng!",
    });
  }).catch(err => {
    // Handle possible errors
    console.error('Could not copy text: ', err);
  });
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Mã Đặt hàng",
    cell: ({ row }: { row: { getValue: (key: string) => any } }) => 
      <div className="font-medium text-slate-400">#<Link href={"/admin/order/id"}>{row.getValue("id")}</Link> </div>
  },
  {
    accessorKey: "status",
    header: "Tình trạng",
    cell: ({ row }: { row: { getValue: (key: string) => any } }) => 
      <StatusCell status={row.getValue("status") as Status} />
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => {
      // Assert the type of products to be string[]
      const products = row.getValue("product") as string[];
  
      // Determine the number of additional products beyond the first two
      const additionalProducts = products.length - 2;
  
      return (
        <div className="capitalize">
          {products.length > 2 ? `${products.slice(0, 2).join(", ")}...` : products.join(", ")}
          <Button className={`w-8 h-8 text-red-500 ${additionalProducts > 0 ? '' : 'invisible'}`} variant='ghost'>
            +{Math.max(0, additionalProducts)}
          </Button>
        </div>
      );
    },
  },    
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Tổng</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
    
      // Format the amount as Vietnamese Dong (VNĐ)
      const formatted = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      }).format(amount)
    
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className=" h-8 w-8 p-0">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => handleButtonClick(payment.id)}
            >
              Sao chép mã đặt hàng
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Xem đơn hàng</DropdownMenuItem>
            <DropdownMenuItem>Xoá đơn hàng</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full px-4">
      <div className="flex justify-start py-4 gap-2">
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Hành động" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Hành động</SelectLabel>
          <SelectItem value="edit">Chỉnh sửa</SelectItem>
          <SelectItem value="view">Xem đơn hàng</SelectItem>
          <SelectItem value="delete">Xoá</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        <Link href={"/admin/order/id"}>
          <Button variant="secondary">Áp dụng</Button>
        </Link>

    </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Tìm kiếm emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Cột <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="py-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "đã chọn."}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} của{" "}
          {table.getFilteredRowModel().rows.length} cột đã chọn.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Quay lại
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
           Tiếp tục
          </Button>
        </div>
      </div>
      
    </div>
  )
}
