import getUser from '../../utils/getUser'

const apiGetUser = async (req, res) => {
    const username = 'educintrabr'
    const data = await getUser(username)
    res.send(data)
}

export default apiGetUser