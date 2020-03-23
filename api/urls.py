from rest_framework import routers
from .api import ShotsViewSet

router = routers.DefaultRouter()
router.register('api/shots',ShotsViewSet, 'shots')

urlpatterns = router.urls