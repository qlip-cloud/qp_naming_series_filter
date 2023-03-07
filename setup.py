from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in qp_naming_series_filter/__init__.py
from qp_naming_series_filter import __version__ as version

setup(
	name='qp_naming_series_filter',
	version=version,
	description='Naming Series Filter',
	author='Henderson Villegas',
	author_email='henderson.villegas@mentum.group',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
