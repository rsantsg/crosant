import Link from "next/link"
export default function page(params){


    return (

        <div>
  <div className="sm:hidden">
    <label for="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option select>Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <nav className="flex gap-6" aria-label="Tabs">
    <Link
        href={`/trip/${params.params.slug}/settings`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Settings
      </Link>

      <a
        href="#"
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Locations
      </a>

      <Link
        href={`/trip/${params.params.slug}/map`}
        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        Map
      </Link>

      <a
        href="#"
        className="shrink-0 rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-700"
        aria-current="page"
      >
        Finance
      </a>
    </nav>
  </div>
</div>
    )
}