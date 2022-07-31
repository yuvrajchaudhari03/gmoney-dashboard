// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { all_invoice_columns } from './all_invoice_columns'
import { pending_columns } from './pending_columns'
import { disbursal_columns } from './disbursal_columns'
import { repayment_columns } from './repayment_columns'
import { rejected_columns } from './rejected_columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Upload } from 'react-feather'
import DataTable from 'react-data-table-component'
import Flatpickr from 'react-flatpickr'

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, ButtonGroup } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <div className='d-flex justify-content-center mb-2'>
        <Button
          color={statusValue === "all_invoices" ? 'primary' : 'outline-primary'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('all_invoices')}
        >
          All Invoices
          <span> (20)</span>
        </Button>
        <Button
          color={statusValue === "pending_for_approval" ? 'warning' : 'outline-warning'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('pending_for_approval')}
        >
          Pending
          <span> (20)</span>
        </Button>
        <Button
          color={statusValue === "accepted" ? 'success' : 'outline-success'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('accepted')}
        >
          Accepted
          <span> (11)</span>
        </Button>
        <Button
          color={statusValue === "disbursal" ? 'primary' : 'outline-primary'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('disbursal')}
        >
          Disbursal
          <span> (3)</span>
        </Button>
        <Button
          color={statusValue === "repayment" ? 'primary' : 'outline-primary'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('repayment')}
        >
          Repayment
          <span> (6)</span>
        </Button>
        <Button
          color={statusValue === "rejected" ? 'danger' : 'outline-danger'}
          className="mx-1 rounded-pill"
          onClick={() => handleStatusValue('rejected')}
        >
          Rejected
          <span> (5)</span>
        </Button>
      </div>
      <hr></hr>
      <div>
        <Row>
          <Col lg='9' className='d-flex align-items-center px-0 px-lg-1'>
            <div className='d-flex align-items-center'>
              <label htmlFor='search-invoice'>Search</label>
              <Input
                id='search-invoice'
                className='ms-50 me-2 w-100'
                type='text'
                value={value}
                onChange={e => handleFilter(e.target.value)}
                placeholder='Search Invoice'
              />
            </div>
            <div className='d-flex align-items-center me-2'>
              <span className='title' style={{ marginRight: "5px" }}>Date </span>
              <Flatpickr
                placeholder="Date"
                // value={picker}
                // onChange={date => setPicker(date)}
                className='form-control invoice-edit-input date-picker'
              />
            </div>
            <div className='d-flex align-items-center'>
              <ButtonGroup>
                <Button color="primary" outline>
                  Today
                </Button>
                <Button color="primary" outline>
                  7 Days
                </Button>
                <Button color="primary" outline>
                  MTD
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col
            lg='3'
            className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'
          >
            <Button
              color="primary"
            >
              <Upload size={16} style={{ marginRight: "8px" }} />
              Upload Invoice
            </Button>
          </Col>
        </Row>
      </div>

    </div>
  )
}

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('id')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentInvoiceStatus, setCurrentInvoiceStatus] = useState('all_invoices')

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue
      })
    )
  }, [dispatch, store.data.length])

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue
      })
    )
  }

  const handlePerPage = e => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        status: statusValue,
        perPage: parseInt(e.target.value)
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStatusValue = (currentStatus) => {
    console.log(currentStatus)
    setStatusValue(currentStatus)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: currentStatus !== 'all_invoices' ? currentStatus : ''
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        status: statusValue,
        perPage: rowsPerPage,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

    return (
      <div className="d-flex justify-content-between">

        <div className='d-flex align-items-center p-1'>
          <label htmlFor='rows-per-page' style={{ whiteSpace: 'nowrap' }}>Rows Per Page</label>
          <Input
            type='select'
            id='rows-per-page'
            value={rowsPerPage}
            onChange={handlePerPage}
            className='form-control ms-50 pe-3'
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </Input>
        </div>
        <ReactPaginate
          nextLabel=''
          breakLabel='...'
          previousLabel=''
          pageCount={count || 1}
          activeClassName='active'
          breakClassName='page-item'
          pageClassName={'page-item'}
          breakLinkClassName='page-link'
          nextLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousLinkClassName={'page-link'}
          previousClassName={'page-item prev'}
          onPageChange={page => handlePagination(page)}
          forcePage={currentPage !== 0 ? currentPage - 1 : 0}
          containerClassName={'pagination react-paginate justify-content-end p-1'}
        />
      </div>
    )
  }

  const dataToRender = (currentInvoiceStatus) => {
    console.log(currentInvoiceStatus)
    const filters = {
      q: value,
      status: statusValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      // if (currentInvoiceStatus === "all_invoices") {
      return store.data
      // } else {
      //   console.log(store.data.filter(d => d.status === currentInvoiceStatus))
      //   return store.data.filter(d => d.status === currentInvoiceStatus)
      // }
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        q: value,
        page: currentPage,
        sort: sortDirection,
        status: statusValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }

  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={
              currentInvoiceStatus === "pending_for_approval" ? pending_columns : currentInvoiceStatus === "disbursal" ? disbursal_columns : currentInvoiceStatus === "repayment" ? repayment_columns : currentInvoiceStatus === "rejected" ? rejected_columns : all_invoice_columns
            }
            responsive={true}
            onSort={handleSort}
            data={dataToRender(currentInvoiceStatus)}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
                setCurrentInvoiceStatus={setCurrentInvoiceStatus}
                currentInvoiceStatus={currentInvoiceStatus}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default InvoiceList
