import logo from 'web/public/images/icon-left-logo.png'
const InvoiceHeader = () => {
  return (
    <div className="mb-4 flex w-full flex-wrap gap-6  text-primary xs:flex-nowrap xs:justify-between">
      <div className="flex w-full flex-col gap-2 xs:max-w-3xl">
        <div className="mb-2 bg-secondary/30 p-2">
          <img src={logo} alt="Fleckz logo" className="h-5" />
        </div>
        <div className="flex gap-2">
          <p>Aan:</p>
          <div>
            <p>Bedrijfs Naam</p>
            <p>Naam Klant</p>
            <p>Straatnaam + nr</p>
            <p>Postcode + Vestigingsplaats</p>
          </div>
        </div>
        <div className="my-4 w-fit self-end bg-secondary/70 px-4 py-2">
          <p>
            <strong>Factuurnummer:</strong>
            <span className="ml-4">XX-XXXX</span>
          </p>
          <p>
            <strong>Factuurdatum:</strong>
            <span className="ml-4">DD-MM-YYYY</span>
          </p>
          <p>
            <strong>Vervaldatum:</strong>
            <span className="ml-4">DD-MM-YYYY</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 xs:max-w-md">
        <div>
          <p className="font-bold">Fleckz</p>
          <p>Straatnaam + nr</p>
          <p>Postcode + Vestigingsplaats</p>
          <p>&nbsp;</p>
          <p>06 123 45 678</p>
          <p>fleckz@emailadres.nl</p>
        </div>
        <div>
          <p>Fleckz Banknaam</p>
          <p>NL99 BANK 0123 4567 89</p>
          <p>Fleckz Bank BIC Code</p>
          <p>&nbsp;</p>
          <p>KVK nr: 12345678</p>
          <p>Btw id: NL123456789B01</p>
        </div>
      </div>
    </div>
  )
}

export default InvoiceHeader
