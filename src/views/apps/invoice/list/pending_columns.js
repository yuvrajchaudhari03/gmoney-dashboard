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

// ** Table columns
export const pending_columns = [
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
        name: 'ACTION',
        sortable: true,
        sortField: 'id',
        minWidth: '130px',
        // selector: row => row.id,
        cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`View`}</Link>
      }
]
