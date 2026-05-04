import { AdminPanel } from "@/components/admin/admin-shell";
import { FaqManager } from "@/components/admin/faq-manager";
import { listFaqs } from "@/lib/products/queries";

export default async function Page() {
  const data = await listFaqs(true);
  const faqs = data.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  }));

  return (
    <AdminPanel title="FAQ" description="Keep public answers short and useful.">
      <FaqManager faqs={faqs} />
    </AdminPanel>
  );
}
