// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import AppLayout from './layouts/AppLayout/AppLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
import SettingLayout from './layouts/SettingsLayout/SettingsLayout'
import WorkRequestPageLayout from './layouts/WorkRequestPageLayout/WorkRequestPageLayout'
import BusinessPage from './pages/BusinessPage/BusinessPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <PrivateSet unauthenticated="home">
        <Set wrap={AppLayout}>
          <Route path="/overview" page={OverviewPage} name="overview" />
          <Route path="/plan" page={PlanPage} name="plan" />
          <Route path="/job-profiles" page={JobProfilesPage} name="jobProfiles" />
          <Route path="/temp-agencies" page={TempAgenciesPage} name="tempAgencies" />
        </Set>
        <Set wrap={WorkRequestPageLayout}>
          <Route path="/requests/{id}" page={WorkRequestPage} name="workRequest" />
        </Set>
        <Set wrap={SettingLayout}>
          <Route path="/settings" redirect="/settings/profile" />
          <Route path="/settings/profile" page={ProfilePage} name="profile" />
          <Route path="/settings/business" page={BusinessPage} name="business" />
        </Set>
      </PrivateSet>
      <Set wrap={DefaultLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
