from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import AccountSerializer

refresh = RefreshToken.for_user(AccountSerializer)

# Tạo access token và refresh token
access_token = str(refresh.access_token)
refresh_token = str(refresh)

# Trả về access token và refresh token cho người dùng
