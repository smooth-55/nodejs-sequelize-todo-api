const { StatusCodes } = require("../constants/statusCodes");


const response = {
    BadReqest: (res, msg) => {
        return res.status(StatusCodes.BadReqest).json({ error: msg });
    },
    InternalServerError: (res, msg) => {
        return res.status(StatusCodes.InternalServerError).json({ error: msg });
    },
    Success: (res, message) => {
        return res.status(StatusCodes.Success).json({ error: message });
    },
    SuccessData: (res, data, message) => {
        return res.status(StatusCodes.Success).json({ data: data, message: message });
    },
    Created: (res, data, msg) => {
        return res.status(StatusCodes.Created).json({ msg: msg, data: data });
    },
    NotFound: (res, msg) => {
        return res.status(StatusCodes.NotFound).json({ error: msg });
    }


}

module.exports = { response }