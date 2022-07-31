import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

const data = {
  invoices: [
    {
      id: '1234',
      upload_date: '08-07-2022_13:2022',
      hsp_name: 'Dr. Batra',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '20,000',
      cover_note: true,
      cover_id: 'Cover 123',
      scheme: 'Scheme 1 ',
      status: 'pending_for_approval',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 12000,
      repayment_amount: 1000,
      issuedDate: '13 Dec 2019',
      client: {
        address: '7777 Mendez Plains',
        company: 'Hall-Robbins PLC',
        companyEmail: 'don85@johnson.com',
        country: 'USA',
        contact: '(616) 865-4180',
        name: 'Jordan Stevenson'
      },
      service: 'Software Development',
      total: 3428,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$724',
      dueDate: '23 Apr 2019'
    },
    {
      id: 'IN4356',
      upload_date: '08-07-2022_13:2022',
      hsp_name: 'Dr. Batra',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '10,000',
      cover_note: true,
      cover_id: 'Cover 456',
      scheme: 'Scheme 2',
      status: 'accepted',
      issuedDate: '17 Jul 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 12000,
      repayment_amount: 1000,
      client: {
        address: '04033 Wesley Wall Apt. 961',
        company: 'Mccann LLC and Sons',
        companyEmail: 'brenda49@taylor.info',
        country: 'Haiti',
        contact: '(226) 204-8287',
        name: 'Stephanie Burns'
      },
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: '15 Dec 2019'
    },
    {
      id: 'A003',
      upload_date: '08-07-2022_09:30',
      hsp_name: 'ALLEYYS AESTHETICS PRIVATE LIMITED',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '5,000',
      cover_note: true,
      cover_id: 'Cover 789',
      scheme: 'Scheme 1 ',
      status: 'low_limit',
      issuedDate: '19 Oct 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 12000,
      repayment_amount: 1000,
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 'A0019',
      upload_date: '08-07-2022_09:30',
      hsp_name: 'ALLEYYS AESTHETICS PRIVATE LIMITED',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '5,000',
      cover_note: true,
      cover_id: 'Cover 789',
      scheme: 'Scheme 1 ',
      status: 'disbursal',
      issuedDate: '19 Oct 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 12000,
      repayment_amount: 1000,
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 'A0020',
      upload_date: '08-07-2022_09:30',
      hsp_name: 'ALLEYYS AESTHETICS PRIVATE LIMITED',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '5,000',
      cover_note: true,
      cover_id: 'Cover 789',
      scheme: 'Scheme 1 ',
      status: 'repayment',
      issuedDate: '19 Oct 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 12000,
      repayment_amount: 1000,
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'Tony Herrera'
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: require('@src/assets/images/avatars/1-small.png').default,
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '03 Nov 2019'
    },
    {
      id: 'A004',
      upload_date: '08-07-2022_13:2022',
      hsp_name: 'Drishtideep Netraseva Day Care Center',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '10,000',
      cover_note: true,
      cover_id: 'Cover 999',
      scheme: 'Scheme 2',
      status: 'accepted',
      issuedDate: '06 Mar 2020',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 5000,
      repayment_amount: 1000,
      client: {
        address: '19022 Clark Parks Suite 149',
        company: 'Smith, Miller and Henry LLC',
        companyEmail: 'mejiageorge@lee-perez.com',
        country: 'Cambodia',
        contact: '(832) 323-6914',
        name: 'Kevin Patton'
      },
      service: 'Software Development',
      total: 4749,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '11 Feb 2020'
    },
    {
      id: 'A005',
      upload_date: '08-07-2022_09:30',
      hsp_name: 'Apex hair transplant and skin clinic',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '12,000',
      cover_note: true,
      cover_id: 'Cover 123',
      scheme: 'Scheme 1 ',
      status: 'bill_approved',
      issuedDate: '08 Feb 2020',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 50000,
      repayment_amount: 1000,
      client: {
        address: '8534 Saunders Hill Apt. 583',
        company: 'Garcia-Cameron and Sons',
        companyEmail: 'brandon07@pierce.com',
        country: 'Martinique',
        contact: '(970) 982-3353',
        name: 'Mrs. Julie Donovan MD'
      },
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: '30 Jun 2019'
    },
    {
      id: 'A006',
      upload_date: '08-07-2022_13:2022',
      hsp_name: 'Vahin wellness center',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '10,000',
      cover_note: true,
      cover_id: 'Cover 456',
      scheme: 'Scheme 2',
      status: 'approved',
      issuedDate: '26 Aug 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 30000,
      repayment_amount: 1000,
      client: {
        address: '661 Perez Run Apt. 778',
        company: 'Burnett-Young PLC',
        companyEmail: 'guerrerobrandy@beasley-harper.com',
        country: 'Botswana',
        contact: '(511) 938-9617',
        name: 'Amanda Phillips'
      },
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: '24 Jun 2019'
    },
    {
      id: 'A007',
      upload_date: '10-07-2022_11:35',
      hsp_name: 'Dentassure Dental Clinic',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '10,000',
      cover_note: true,
      cover_id: 'Cover 789',
      scheme: 'Scheme 1 ',
      status: 'transaction_Disbursed',
      issuedDate: '17 Sep 2019',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 75000,
      repayment_amount: 1000,
      client: {
        address: '074 Long Union',
        company: 'Wilson-Lee LLC',
        companyEmail: 'williamshenry@moon-smith.com',
        country: 'Montserrat',
        contact: '(504) 859-2893',
        name: 'Christina Collier'
      },
      service: 'UI/UX Design & Development',
      total: 2713,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$407',
      dueDate: '22 Nov 2019'
    },
    {
      id: 'A008',
      upload_date: '10-07-2022_11:35',
      hsp_name: 'Dr Shettys Cosmetic Centre',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '9,000',
      cover_note: true,
      cover_id: 'Cover 999',
      scheme: 'Scheme 2',
      status: 'low_limit',
      issuedDate: '11 Feb 2020',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 100000,
      repayment_amount: 1000,
      client: {
        address: '5225 Ford Cape Apt. 840',
        company: 'Schwartz, Henry and Rhodes Group',
        companyEmail: 'margaretharvey@russell-murray.com',
        country: 'Oman',
        contact: '(758) 403-7718',
        name: 'David Flores'
      },
      service: 'Template Customization',
      total: 4309,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: '10 Feb 2020'
    },
    {
      id: 'A0021',
      upload_date: '10-07-2022_11:35',
      hsp_name: 'Dr Jayesh Cosmetic Centre',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '9,000',
      cover_note: true,
      cover_id: 'Cover 999',
      scheme: 'Scheme 2',
      status: 'rejected',
      issuedDate: '11 Feb 2020',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 100000,
      repayment_amount: 1000,
      client: {
        address: '5225 Ford Cape Apt. 840',
        company: 'Schwartz, Henry and Rhodes Group',
        companyEmail: 'margaretharvey@russell-murray.com',
        country: 'Oman',
        contact: '(758) 403-7718',
        name: 'David Flores'
      },
      service: 'Template Customization',
      total: 4309,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: '10 Feb 2020'
    },
    {
      id: 'A0022',
      upload_date: '10-07-2022_11:35',
      hsp_name: 'Dr Mic Cosmetic Centre',
      invoice_date: '01-07-2022',
      mobile_number:8888888888,
      amount: '9,000',
      cover_note: true,
      cover_id: 'Cover 999',
      scheme: 'Scheme 2',
      status: 'rejected',
      issuedDate: '11 Feb 2020',
      loan_id: 123,
      disbursal_date: '01-07-2022',
      available_limits: 100000,
      repayment_amount: 1000,
      client: {
        address: '5225 Ford Cape Apt. 840',
        company: 'Schwartz, Henry and Rhodes Group',
        companyEmail: 'margaretharvey@russell-murray.com',
        country: 'Oman',
        contact: '(758) 403-7718',
        name: 'David Flores'
      },
      service: 'Template Customization',
      total: 4309,
      avatar: require('@src/assets/images/avatars/9-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: '10 Feb 2020'
    }

  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/invoice/invoices').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { perPage = 10, page = 1, status = null, sort, sortColumn } = config
  /* eslint-enable */

  const dataAsc = data.invoices.sort((a, b) => {
    if (a[sortColumn]) {
      return a[sortColumn] < b[sortColumn] ? -1 : 1
    } else {
      const splitColumn = sortColumn.split('.')
      const columnA = a[splitColumn[0]][splitColumn[1]]
      const columnB = b[splitColumn[0]][splitColumn[1]]
      return columnA < columnB ? -1 : 1
    }
  })

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()
  // const queryLowered = q.toLowerCase()
  const filteredData = dataToFilter.filter(invoice => {
    console.log(status)
    /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
    if (status !== 'all_invoices') {
      return (
        invoice.status.toLowerCase() === (status.toLowerCase() || invoice.status.toLowerCase())
      )
    } else {
      return invoice
    }

  })
  /* eslint-enable  */

  return [
    200,
    {
      allData: data.invoices,
      total: filteredData.length,
      invoices: filteredData.length <= perPage ? filteredData : paginateArray(filteredData, perPage, page)
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet(/\/api\/invoice\/invoices\/[a-zA-Z]+/).reply(config => {
  // // Get event id from URL
  console.log(config)
  const invoiceId = (config.url.substring(config.url.lastIndexOf('/') + 1))
  console.log(invoiceId)
  const invoiceIndex = data.invoices.findIndex(e => e.id === String(invoiceId))
  console.log(invoiceIndex)
  const responseData = {
    invoice: data.invoices[invoiceIndex],
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905'
    }
  }
  return [200, responseData]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/invoice/delete').reply(config => {
  // Get invoice id from URL
  let invoiceId = config.id

  // Convert Id to number
  invoiceId = Number(invoiceId)

  const invoiceIndex = data.invoices.findIndex(t => t.id === invoiceId)
  data.invoices.splice(invoiceIndex, 1)

  return [200]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/api/invoice/clients').reply(() => {
  const clients = data.invoices.map(invoice => invoice.client)
  return [200, clients.slice(0, 5)]
})
