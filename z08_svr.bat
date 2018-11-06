@rem z_start_server.bat
@rem live-server public/
@rem  bad  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\node_modules\live-server\live-server public/
@rem  bad  \aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\node_modules\live-server\live-server public/

@rem  WORKS - need to define server_006 in scripts of package.json
@rem    yarn run server_006


@rem set lvpublic=SEC_006_Webpack/react-course-proj-01/Indecision-app-01/public
@rem 
@rem 
@rem set lvserver=live-server
@rem yarn run  %lvserver% %lvpublic%

@rem yarn run  webpack-dev-server
@rem yarn run  webpack-dev-server 2> zzz_dev_server_out.txt
yarn run  webpack-dev-server
pause
