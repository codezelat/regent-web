import { AdminPanel } from "@/components/admin/admin-shell";
import { requireAdminSession } from "@/lib/admin/session";
import { updateProfileAction } from "@/app/hidden-admin/dashboard/actions";

export default async function Page() {
  const session = await requireAdminSession();

  return (
    <AdminPanel title="Profile" description="Minimal admin profile details.">
      <form action={updateProfileAction} className="grid max-w-xl gap-4">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Name
          <input
            className="rounded-lg border border-black/10 px-3 py-2 font-normal"
            name="name"
            defaultValue={session.user.name}
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Profile image URL
          <input
            className="rounded-lg border border-black/10 px-3 py-2 font-normal"
            name="image"
            defaultValue={session.user.image || ""}
            placeholder="https://example.com/photo.jpg"
          />
        </label>
        <button className="w-fit rounded-full bg-[var(--regent-blue-900)] px-5 py-3 text-sm font-semibold text-white" type="submit">
          Save profile
        </button>
      </form>
    </AdminPanel>
  );
}
