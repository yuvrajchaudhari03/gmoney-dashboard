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

const getStatusBadgeColor = (status) => {
  if (status === "accepted") {
    return 'light-success'
  } else if (status === "rejected") {
    return 'light-danger'
  } else if (status === "low_limit") {
    return 'light-danger'
  } else if (status === "pending_for_approval") {
    return 'light-warning'
  } else if (status === "approved") {
    return 'light-success'
  } else if (status === "bill_approved") {
    return 'light-primary'
  } else {
    return 'light-success'
  }
}
// ** Table columns
export const all_invoice_columns = [
  {
    name: 'INV UPLOAD DATE',
    sortable: true,
    sortField: 'id',
    minWidth: '200px',
    // selector: row => row.id,
    cell: row => <span>{row.upload_date}</span>
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
    name: 'INV DATE',
    sortable: true,
    sortField: 'id',
    minWidth: '130px',
    // selector: row => row.id,
    cell: row => <span>{row.invoice_date}</span>
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
    name: 'COVER NT',
    sortable: true,
    sortField: 'id',
    minWidth: '140px',
    // selector: row => row.id,
    cell: row => <span>{row.upload_date}</span>
  },
  {
    name: 'COVER ID',
    sortable: true,
    sortField: 'id',
    minWidth: '130px',
    // selector: row => row.id,
    cell: row => <span>{row.cover_id}</span>
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
    name: 'STATUS',
    sortable: true,
    sortField: 'id',
    minWidth: '150px',
    // selector: row => row.id,
    cell: row => {
      return (
        <Badge color={getStatusBadgeColor(row.status)} pill>
          {row.status}
        </Badge>
      )
    }
  },
  {
    name: 'ACTION',
    sortable: true,
    sortField: 'id',
    minWidth: '130px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`View`}</Link>
  }
]
