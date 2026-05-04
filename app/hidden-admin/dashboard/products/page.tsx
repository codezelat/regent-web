import { AdminPanel } from "@/components/admin/admin-shell";
import { ProductManager } from "@/components/admin/product-manager";
import { listProducts } from "@/lib/products/queries";

export default async function Page() {
  const data = await listProducts({ pageSize: 100, includeDrafts: true });
  const products = data.items.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <AdminPanel title="Products" description="Add, edit, publish, and reorder catalog items.">
      <ProductManager products={products} />
    </AdminPanel>
  );
}
