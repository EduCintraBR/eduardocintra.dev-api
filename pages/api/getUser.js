import getUser from '../../utils/getUser'
import initMiddleware from '../../lib/init-middleware'
import Cors from 'cors'

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'OPTIONS'],
    })
)

const apiGetUser = async (req, res) => {
    const username = 'educintrabr'
    await cors(req, res)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    const data = await getUser(username)
    res.send(data)
}

export default apiGetUser