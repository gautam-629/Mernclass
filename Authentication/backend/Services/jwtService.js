const jwt=require('jsonwebtoken');
class JwtService {
    static sign(payload, expiry = '1h', secret='I Love You') {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret='I Love You') {
        return jwt.verify(token, secret);
    }
}
module.exports= JwtService;