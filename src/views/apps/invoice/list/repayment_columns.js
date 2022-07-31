// ** React Imports
// import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
// import { store } from '@store/store'
// import { deleteInvoice } from '../store'

// ** Reactstrap Imports
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledTooltip,
    UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import {
    Eye,
    Send,
    Edit,
    Copy,
    Save,
    Info,
    Trash,
    PieChart,
    Download,
    TrendingUp,
    CheckCircle,
    MoreVertical,
    ArrowDownCircle
} from 'react-feather'

// ** Vars
// const invoiceStatusObj = {
//   Sent: { color: 'light-secondary', icon: Send },
//   Paid: { color: 'light-success', icon: CheckCircle },
//   Draft: { color: 'light-primary', icon: Save },
//   Downloaded: { color: 'light-info', icon: ArrowDownCircle },
//   'Past Due': { color: 'light-danger', icon: Info },
//   'Partial Payment': { color: 'light-warning', icon: PieChart }
// }

// ** renders client column
// const renderClient = row => {
//   const stateNum = Math.floor(Math.random() * 6),
//     states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//     color = states[stateNum]

//   if (row.avatar.length) {
//     return <Avatar className='me-50' img={row.avatar} width='32' height='32' />
//   } else {
//     return <Avatar color={color} className='me-50' content={row.client ? row.client.name : 'John Doe'} initials />
//   }
// }

// ** Table columns
export const repayment_columns = [
    {
        name: 'INV DATE',
        sortable: true,
        sortField: 'id',
        minWidth: '130px',
        // selector: row => row.id,
        cell: row => <span>{row.invoice_date}</span>
    },
    {
        name: 'INV NO',
        sortable: true,
        sortField: 'id',
        minWidth: '107px',
        // selector: row => row.id,
        cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
    },
    {
        name: 'HSP NAME',
        sortable: true,
        sortField: 'id',
        minWidth: '200px',
        // selector: row => row.id,
        cell: row => <span>{row.hsp_name}</span>
    },
    {
        name: 'LOAN ID',
        sortable: true,
        sortField: 'id',
        minWidth: '125px',
        // selector: row => row.id,
        cell: row => <span>{row.loan_id}</span>
    },
    {
        name: 'INV AMT',
        sortable: true,
        sortField: 'id',
        minWidth: '130px',
        // selector: row => row.id,
        cell: row => <span>{row.amount}</span>
    },
    {
        name: 'REPAYMENT AMT',
        sortable: true,
        sortField: 'id',
        minWidth: '190px',
        // selector: row => row.id,
        cell: row => <span>{row.repayment_amount}</span>
    },
    {
        name: 'SCHEME',
        sortable: true,
        sortField: 'id',
        minWidth: '130px',
        // selector: row => row.id,
        cell: row => <span>{row.scheme}</span>
    },
    {
        name: 'ACTION',
        sortable: true,
        sortField: 'id',
        minWidth: '160px',
        // selector: row => row.id,
        cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`Show Payments`}</Link>
    }
]
