export function formatDate(dateString: string) {
  // return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('ar', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  //   timeZone: 'UTC',
  // })
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(
    'ar-EG-u-nu-latn',
    { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' },
  )
}
