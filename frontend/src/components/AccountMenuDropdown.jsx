function AccountMenu() {
    return (
        <select className="p-2 border" name="account-menu" id="accountMenu">
            <option value="settings">Settings</option>
            <option value="logout">Logout</option>
        </select>
    )
}

export default AccountMenu;