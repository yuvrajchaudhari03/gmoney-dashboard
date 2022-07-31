// ** React Imports
import { Fragment } from 'react'
import Logo from '@src/assets/images/logo/logo.png'
// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'
import { Box, User, FileText } from 'react-feather'
const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin
    // setMenuVisibility 
  } = props

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        {/* <NavbarBookmarks setMenuVisibility={setMenuVisibility} /> */}
        <img src={Logo} alt="logo" width="140px" />
      </div>
      <div className="d-flex align-items-center">
        <div className="text-primary mx-1 d-flex align-items-center">
          <span>
            <Box size={16} style={{ marginRight: "9px" }} />
          </span>
          Dashboard
        </div>
        <div className="text-primary mx-1">
          <span>
            <FileText size={16} style={{ marginRight: "9px" }} />
          </span>
          Reports
        </div>
        <div className="text-primary mx-1">
          <span>
            <User size={16} style={{ marginRight: "9px" }} />
          </span>
          Clients
        </div>
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
