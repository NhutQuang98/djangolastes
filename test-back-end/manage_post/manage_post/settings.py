from pathlib import Path
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-fvk9h%d46_-@j-pw)x)3@++ffp0cb#l((n%6#*^0*yebdrm)z='


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True


# setting các host được phép truy cập
ALLOWED_HOSTS = ["*"]
# ALLOWED_HOSTS = ['127.0.0.1', 'localhost', 'localhost:3000']
# ALLOWED_HOSTS = ['localhost']


# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'account',
    'category',
    'post',
    'corsheaders',
    'rest_framework',
]


# MIDDLEWARE definition
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    # 'account.jwtAuthenticationMiddleware.JWTAuthenticationMiddleware',
]


# setting urls chính
ROOT_URLCONF = 'manage_post.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


WSGI_APPLICATION = 'manage_post.wsgi.application'


# connect database với postgresql
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'test',
        'USER': 'postgres',
        'PASSWORD': '200422',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/
# setting language mặc định
LANGUAGE_CODE = 'en-us'
# setting múi giờ mặc định
TIME_ZONE = 'UTC'
# setting cho phép sử dụng đa ngôn ngữ
USE_I18N = True
# setting cho phép sử dụng múi giờ của hệ thống
USE_TZ = True
# DATETIME_FORMAT = 'Y-m-d H:i:s'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/
STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# Cho phép tất cả các phương thức của HTTP, ví dụ GET, POST, PUT, DELETE, ...
CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

# Cho phép các header cụ thể được gửi đi, ví dụ 'content-type', 'authorization', ...
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

# Cho phép các credential được sử dụng trong các yêu cầu AJAX, ví dụ cookies, tokens, ...
CORS_ALLOW_CREDENTIALS = True
APPEND_SLASH=False

# Thiết lập địa chỉ website của bạn, ví dụ 'http://localhost:3000'
# CORS_ORIGIN_ALLOW_ALL = True
# CORS_ALLOW_ALL_ORIGINS = True
# CORS_ORIGIN_WHITELIST = [
#     'http://localhost:3000',
# ]
# AUTHENTICATION_BACKENDS = [
#     'myapp.backends.AccountBackend',
#     'django.contrib.auth.backends.ModelBackend',
# ]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]

# CORS_ALLOWED_ORIGIN_REGEXES = [
#     r"^https://\w+\.example\.com$",
# ]

AUTH_USER_MODEL = 'account.AccountModels'


# setting rest_framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    #     'rest_framework_simplejwt.tokens.AccessToken',
    #     'rest_framework_simplejwt.tokens.RefreshToken',
    # ),
}


# setting SIMPLE_JWT
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=2),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=2),
    'SIGNING_KEY': SECRET_KEY,
    'AUTH_HEADER_TYPES': ('Bearer'),
    "ALGORITHM": "HS256",
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
}
