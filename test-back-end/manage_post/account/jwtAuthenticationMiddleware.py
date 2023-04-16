from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed

# lấy method của request (GET, POST, PUT, DELETE)
def method_request(request):
    if request.method == 'OPTIONS':
        method = request.META.get('HTTP_ACCESS_CONTROL_REQUEST_METHOD')
        return method
    return request.method

# tạo Middleware kiểm tra đã đăng nhập chưa khi nhận request
class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Kiểm tra xem request có phải là một request đăng nhập hay không
        if (request.path == '/api/sign-in/' or request.path == '/api/sign-up/') and method_request(request) == 'POST':
            response = self.get_response(request)
            return response
        # lấy token từ header của request để kiểm tra
        # auth_header = request.META.get('HTTP_AUTHORIZATION')
        auth_header = request.headers.get('Authorization', '').split()
        print("debug")
        print(auth_header)
        # token = auth_header[1]
        # decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])

        # 'Bearer ' + access_token
        if len(auth_header)!=2:
            raise AuthenticationFailed('Not found token or token invalid')
        try:
            # Kiểm tra xác thực token
            JWTAuthentication().authenticate(request)
        except AuthenticationFailed:
            raise AuthenticationFailed('Token invalid')

        response = self.get_response(request)
        return response
