import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  DevOps_page,
  Error_page,
  Guitar_page,
  Home_page,
  Linux_page,
  Page_Creation_page,
  Postman_page,
  Python_page,
  ReactJS_page,
  Spring_page,
  Sql_page,
  Windows_page,
} from "./pages";

import {
  Aop,
  ApplicationProperties,
  Auditing,
  Caching,
  ExceptionHandling,
  Ide,
  InterviewQuestions,
  Jenkins,
  Jpa,
  JUnit,
  Logging,
  Rest,
  SpringBatch,
  SpringHome,
  SpringIO,
  SpringSecurity,
  TransactionManagement,
} from "./pages/Spring/SpringComponents";

import {
  DBeaverMain,
  DBInitCommandLineRunnerMain,
  DBInitDataSqlMain,
  DBInitPostConstructMain,
  H2Main,
  MongoDBMain,
  MySqlMain,
  PostgresqlMain,
  ProfileMain,
  ReadFromPropertiesMain,
} from "./pages/Spring/SpringComponents/S2_ApplicationPropsPkg";

import {
  LogFileMain,
  LogUtilMain,
  Slf4jLogbackMain,
  LoggingPropsMain,
} from "./pages/Spring/SpringComponents/S3_LoggingPkg";

import {
  SpecificationDocument,
  CreateStepMain,
  PageCreationHome,
  AppTreeComponent,
  ComponentTreeComponent,
  WebPageComponent,
} from "./pages/PageCreate/PageCreateComponents";

import {
  GlobalSearch,
  IntroMain,
  JsxMain,
  MemorySearchMain,
  Pagination,
  ReactBasics,
  ReactJSHome,
  ReactJSInterviewQuestions,
  ReactRouter,
  RouterMain,
  SetupMain,
  TypeScript,
} from "./pages/ReactJS/ReactJSComponents";

import {
  BasicConcepts,
  KeyTypesMain,
  SqlHome,
} from "./pages/Sql/SqlComponents";

import {
  Django,
  FastApi,
  PythonBasics,
  PythonGeneral,
  PythonHome,
  PythonIde,
} from "./pages/Python/PythonComponents";
import {
  ConnectToServerSshMain,
  CreateServerMain,
  ReactOnTomcatMain,
  DevOpsHome,
  JdkInstallMain,
  JenkinsMain,
  Linux_Server,
  MySqlnstallMain,
  ReactOnSpringMain,
  SetupServerMain,
  TomcatInstallMain,
  Tomcat,
  FileZillaMain,
  DeployNetlifyMain,
  DeployRenderMain,
  GitMain,
  NginxInstallMain,
  DeployLinuxMain,
  Nginx,
  DeployJarNginxMain,
  DeployReactNginxMain,
  MavenCreateJarMain,
} from "./pages/DevOps/DevOpsComponents";

import { LinuxHome } from "./pages/Linux/LinuxComponents";
import {
  CollectionMain,
  Environment,
  MultipleHttpRequestMain,
  PostmanHome,
} from "./pages/Postman/PostmanComponents";
import { PortCheckMain, WindowsHome } from "./pages/Windows/WindowsComponents";
import {
  IntelliJMain,
  StsMain,
} from "./pages/Spring/SpringComponents/S1_IdePkg";
import {
  CorsMain,
  OpenApiSwaggerMain,
  RestMain,
  SseMain,
  StreamDataMain,
  StreamLargeResponseMain,
  WebSocketMain,
} from "./pages/Spring/SpringComponents/S7_RestApiPkg";

import {
  GenZCareerMain,
  JavaInUseMain,
  JavaTechieMain,
  LoopStreamParallelStreamMain,
  MultiThreadBlockQueueMain,
  StreamRecordsInstantlyMain,
} from "./pages/Spring/SpringComponents/S16_InterviewQuestionsPkg";

import {
  CaffeineMain,
  EhCacheMain,
  HazelcastMain,
  InfinispanMain,
  RedisMain,
  SimpleDefaultMain,
} from "./pages/Spring/SpringComponents/S12_CachingPkg";

import {
  JwtMain,
  JwtRefreshTokenInDBHttpOnlyMain,
  JwtRefreshTokenInDBMain,
  JwtRefreshTokenStatelessMain,
  JwtV3_5_6Main,
  JwtV_2_6_11Main,
  MultipleJwtSecurityConfigMain,
  OAuth2Main,
  SpringSecurityMain,
} from "./pages/Spring/SpringComponents/S8_SecurityPkg";
import { BeforeAdviceMain } from "./pages/Spring/SpringComponents/S9_AopPkg";
import {
  ConfigMsgControllerMain,
  ConfigMsgPropertiesMain,
  CustomAtControllerAdviceMain,
  CustomCtrlAdviceProdMain,
  CustomErrMsgMain,
  RuntimeMain,
  TimestampConfigMain,
} from "./pages/Spring/SpringComponents/S6_ExceptionsPkg";

import {
  ExcelMain,
  FileUploadMain,
} from "./pages/Spring/SpringComponents/S13_SpringIOPkg";
import { JunitArchitectureMain } from "./pages/Spring/SpringComponents/S14_JUnitPkg";
import {
  CICDMain,
  JenkinsServerMain,
} from "./pages/Spring/SpringComponents/S15_JenkinsPkg";

import OperatorStatements from "./pages/Sql/SqlComponents/OperatorStatementsPkg/OperatorStatements";
import {
  AliasMain,
  BetweenMain,
  DistinctMain,
  InMain,
  IsNullMain,
  LikeMain,
  LimitMain,
  LogicalOperatorsMain,
  OrderByMain,
  RegexMain,
  SelectMain,
  UseMain,
  WhereClauseMain,
} from "./pages/Sql/SqlComponents/OperatorStatementsPkg";

import {
  EntityValidationMain,
  JpaLoggingMain,
  JpqlMain,
  Many2ManyBiLazyMain,
  MappingLibsMain,
  One2ManyBiLazyMain,
  PaginationSortingMain,
  StoredProceduresFunctionsMain,
} from "./pages/Spring/SpringComponents/S4_JpaPkg";

import {
  CombinedAuditMain,
  HibernateEnvarsMain,
  JpaAuditMain,
  SpringDataEnvarsMain,
} from "./pages/Spring/SpringComponents/S5_AuditingPkg";
import {
  IsolationMain,
  PropagationMain,
  RollbackMain,
  TransactionalMain,
  TransactionManagementMain,
} from "./pages/Spring/SpringComponents/S10_TransactionManagementPkg";
import {
  BatchPartitioningMain,
  BatchProcessMain,
} from "./pages/Spring/SpringComponents/S11_SpringBatchPkg";

import { SuperupMain } from "./pages/ReactJS/ReactJSComponents/R7_ReactJSInterviewQuestionsPkg";
import {
  AntonGlushkinMain,
  Flamenco,
  GipsyKings,
  GuitarHome,
} from "./pages/Guitar/GuitarComponents";
import {
  AllegriaMain,
  LoveAndLiberteMain,
} from "./pages/Guitar/GuitarComponents/G2_GipsyKingsPkg";
import {
  FlamencoBasicsMain,
  RumbaMain,
  SoleaMain,
} from "./pages/Guitar/GuitarComponents/G3_FlamencoPkg";
import GeneralMain from "./pages/Guitar/GuitarComponents/G1_GeneralPkg/GeneralMain";

import GenericSongsMain from "./pages/Guitar/GuitarComponents/G2_GipsyKingsPkg/X_GenericSonsSections/GenericSongsMain";
import Batch from "./pages/Windows/WindowsComponents/BatchPkg/Batch";
import AsciiMain from "./pages/Windows/WindowsComponents/BatchPkg/A_AsciiSections/AsciiMain";

import {
  DataTypesMain,
  FileHandlingMain,
  IfElseMain,
  LoopsMain,
  ModulesPackagingMain,
  OperatorsMain,
  PythonExceptionsMain,
  PythonFunctionsMain,
  PythonOopMain,
  VenvMain,
} from "./pages/Python/PythonComponents/P2_PythonBasicsPkg";
import {
  PyCharmMain,
  VsCodeMain,
} from "./pages/Python/PythonComponents/P0_PythonIdePkg";
import {
  CreateProjectMain,
  PythonGitMain,
} from "./pages/Python/PythonComponents/P1_PythonGeneralPkg";
import { CreateDjangoProjectMain } from "./pages/Python/PythonComponents/P5_DjangoPkg";
import SetupFastApiProjectMain from "./pages/Python/PythonComponents/P4_FastApiPkg/A__SetupFastApiProjectSections/SetupFastApiProjectMain";
import {
  AdvancedTopicsMain,
  ApplicationStructureAndArchitectureMain,
  BackgroundTasksAndAsyncMain,
  CRUDMain,
  DataBaseIntegrationMain,
  DependencyInjectionMain,
  DeploymentAndDevOpsMain,
  ErrorHandlingMain,
  FastApiFolderStructureMain,
  LoggingMain,
  MiddlewareSectionsMain,
  PerformanceAndConcurrencyMain,
  RequestDataAmdValidationSectionsMain,
  ResponseHandlingSectionsMain,
  SecurityMain,
  TestingMain,
} from "./pages/Python/PythonComponents/P4_FastApiPkg";
import {
  PythonDictionaryMain,
  PythonListMain,
  PythonSetMain,
  PythonTupleMain,
} from "./pages/Python/PythonComponents/P3_DataStructuresPkg";
import FastAPI_page from "./pages/FastAPI/FastAPI_page";
import {
  FastAPIAuditing,
  FastAPICaching,
  FastApiConfigurationProfilesEnv,
  FastAPIException,
  FastAPIHome,
  FastAPIIde,
  FastAPILogging,
  FastAPIRouter,
  FastAPISecurity,
  FastAPISQLAlchemy,
} from "./pages/FastAPI/FastAPIComponents";
import {
  MainPyMain,
  PydanticMain,
  SetupFastApiMain,
} from "./pages/FastAPI/FastAPIComponents/F3_FastAPIRouterPkg";
import DockerMain from "./pages/DevOps/DevOpsComponents/D_DockerPkg/DockerMain";
import PythonDataStructure from "./pages/Python/PythonComponents/P3_DataStructuresPkg/PythonDataStructure";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "spring",
          element: <Spring_page />,
          children: [
            { index: true, element: <SpringHome /> },
            {
              path: "ide",
              element: <Ide />,
              children: [
                { path: "sts", element: <StsMain /> },
                { path: "intellij", element: <IntelliJMain /> },
              ],
            },
            {
              path: "application-properties",
              element: <ApplicationProperties />,
              children: [
                { path: "h2", element: <H2Main /> },
                { path: "postgresql", element: <PostgresqlMain /> },
                { path: "mysql", element: <MySqlMain /> },
                { path: "mongodb", element: <MongoDBMain /> },
                { path: "dbeaver", element: <DBeaverMain /> },
                { path: "profiles", element: <ProfileMain /> },
                { path: "db-initialization", element: <DBInitDataSqlMain /> },
                {
                  path: "post-construct-initialization",
                  element: <DBInitPostConstructMain />,
                },
                {
                  path: "command-line-initialization",
                  element: <DBInitCommandLineRunnerMain />,
                },
                {
                  path: "read-from-properties",
                  element: <ReadFromPropertiesMain />,
                },
              ],
            },
            {
              path: "logging",
              element: <Logging />,
              children: [
                { path: "LogUtil", element: <LogUtilMain /> },
                { path: "slf4j-logback", element: <Slf4jLogbackMain /> },
                { path: "log-file", element: <LogFileMain /> },
                { path: "logging-props", element: <LoggingPropsMain /> },
              ],
            },
            {
              path: "jpa",
              element: <Jpa />,
              children: [
                {
                  path: "entity-validation",
                  element: <EntityValidationMain />,
                },
                { path: "mapping-libs", element: <MappingLibsMain /> },
                { path: "jpql", element: <JpqlMain /> },
                {
                  path: "pagination-sorting",
                  element: <PaginationSortingMain />,
                },
                { path: "many2many-bi-lazy", element: <Many2ManyBiLazyMain /> },
                { path: "one2many-bi-lazy", element: <One2ManyBiLazyMain /> },
                {
                  path: "stored-procedures-functions",
                  element: <StoredProceduresFunctionsMain />,
                },
                { path: "logging-jpa-hibernate", element: <JpaLoggingMain /> },
              ],
            },
            {
              path: "audit",
              element: <Auditing />,
              children: [
                { path: "jpa-audit", element: <JpaAuditMain /> },
                {
                  path: "hibernate-envars-audit",
                  element: <HibernateEnvarsMain />,
                },
                {
                  path: "spring-envars-audit",
                  element: <SpringDataEnvarsMain />,
                },
                {
                  path: "combine-jpa-envars-audit",
                  element: <CombinedAuditMain />,
                },
              ],
            },
            {
              path: "exception-handling",
              element: <ExceptionHandling />,
              children: [
                { path: "runtime", element: <RuntimeMain /> },
                {
                  path: "config-msg-app-props",
                  element: <ConfigMsgPropertiesMain />,
                },
                {
                  path: "config-msg-at-controller",
                  element: <ConfigMsgControllerMain />,
                },
                { path: "custom-error-msg", element: <CustomErrMsgMain /> },
                {
                  path: "custom-error-msg-controller-advice",
                  element: <CustomAtControllerAdviceMain />,
                },
                {
                  path: "custom-rest-controller-advice",
                  element: <CustomCtrlAdviceProdMain />,
                },
                {
                  path: "timestamp-error-config",
                  element: <TimestampConfigMain />,
                },
              ],
            },
            {
              path: "rest",
              element: <Rest />,
              children: [
                // RestMain
                { path: "rest-api", element: <RestMain /> },
                { path: "cors", element: <CorsMain /> },
                { path: "openapi-swagger", element: <OpenApiSwaggerMain /> },
                { path: "sse", element: <SseMain /> },
                { path: "websocket", element: <WebSocketMain /> },
                { path: "stream-data", element: <StreamDataMain /> },
                {
                  path: "stream-large-response",
                  element: <StreamLargeResponseMain />,
                },
              ],
            },
            {
              path: "security",
              element: <SpringSecurity />,
              children: [
                { path: "spring-security", element: <SpringSecurityMain /> },
                { path: "jwt", element: <JwtMain /> },
                { path: "jwt-v2-6-11", element: <JwtV_2_6_11Main /> },
                { path: "jwt-v3-5-6", element: <JwtV3_5_6Main /> },
                {
                  path: "jwt-refresh-token-stateless",
                  element: <JwtRefreshTokenStatelessMain />,
                },
                {
                  path: "jwt-refresh-token-in-DB",
                  element: <JwtRefreshTokenInDBMain />,
                },
                {
                  path: "jwt-refresh-token-httpOnly",
                  element: <JwtRefreshTokenInDBHttpOnlyMain />,
                },
                {
                  path: "jwt-multiple-config",
                  element: <MultipleJwtSecurityConfigMain />,
                },
                { path: "oauth2", element: <OAuth2Main /> },
              ],
            },
            {
              path: "aop",
              element: <Aop />,
              children: [
                { path: "before-advice", element: <BeforeAdviceMain /> },
              ],
            },
            {
              path: "transaction-management",
              element: <TransactionManagement />,
              children: [
                { path: "concepts", element: <TransactionManagementMain /> },
                { path: "transactional", element: <TransactionalMain /> },
                { path: "propagation", element: <PropagationMain /> },
                { path: "rollback", element: <RollbackMain /> },
                { path: "isolation", element: <IsolationMain /> },
              ],
            },
            {
              path: "batch",
              element: <SpringBatch />,
              children: [
                { path: "process", element: <BatchProcessMain /> },
                { path: "partitioning", element: <BatchPartitioningMain /> },
              ],
            },
            {
              path: "caching",
              element: <Caching />,
              children: [
                { path: "simple-default", element: <SimpleDefaultMain /> },
                { path: "caffeine", element: <CaffeineMain /> },
                { path: "ehCache", element: <EhCacheMain /> },
                { path: "redis", element: <RedisMain /> },
                { path: "hazelcast", element: <HazelcastMain /> },
                { path: "infinispan", element: <InfinispanMain /> },
              ],
            },
            {
              path: "io",
              element: <SpringIO />,
              children: [
                { path: "file-upload", element: <FileUploadMain /> },
                { path: "Excel", element: <ExcelMain /> },
              ],
            },
            {
              path: "junit",
              element: <JUnit />,
              children: [
                { path: "architecture", element: <JunitArchitectureMain /> },
                // { path: "", element: < /> },
              ],
            },
            {
              path: "jenkins",
              element: <Jenkins />,
              children: [
                { path: "ci-cd", element: <CICDMain /> },
                { path: "server-install", element: <JenkinsServerMain /> },
              ],
            },
            {
              path: "interview-questions",
              element: <InterviewQuestions />,
              children: [
                {
                  path: "stream-records-instantly",
                  element: <StreamRecordsInstantlyMain />,
                },
                {
                  path: "loop-stream-parallel-stream",
                  element: <LoopStreamParallelStreamMain />,
                },
                {
                  path: "multithread-block-queue",
                  element: <MultiThreadBlockQueueMain />,
                },
                { path: "java-in-use", element: <JavaInUseMain /> },
                { path: "java-techie", element: <JavaTechieMain /> },
                { path: "gen-z-career", element: <GenZCareerMain /> },
              ],
            },
          ],
        },

        {
          path: "reactJS",
          element: <ReactJS_page />,
          children: [
            { index: true, element: <ReactJSHome /> },
            { path: "setup", element: <SetupMain /> },
            {
              path: "basics",
              element: <ReactBasics />,
              children: [
                { path: "jsx", element: <JsxMain /> },
                { path: "jsx", element: <JsxMain /> },
              ],
            },
            {
              path: "typescript",
              element: <TypeScript />,
              children: [
                { path: "introduction", element: <IntroMain /> },
                { path: "introduction", element: <IntroMain /> },
              ],
            },
            {
              path: "router",
              element: <ReactRouter />,
              children: [
                { path: "install", element: <RouterMain /> },
                { path: "install", element: <RouterMain /> },
              ],
            },
            { path: "pagination", element: <Pagination /> },
            {
              path: "global-search",
              element: <GlobalSearch />,
              children: [
                { path: "memory-search", element: <MemorySearchMain /> },
                { path: "memory-search", element: <MemorySearchMain /> },
              ],
            },
            {
              path: "reactjs-interview-questions",
              element: <ReactJSInterviewQuestions />,
              children: [{ path: "superup", element: <SuperupMain /> }],
            },
          ],
        },

        {
          path: "sql",
          element: <Sql_page />,
          children: [
            { index: true, element: <SqlHome /> },
            {
              path: "basic-concepts",
              element: <BasicConcepts />,
              children: [{ path: "key-types", element: <KeyTypesMain /> }],
            },
            {
              path: "operator-statements",
              element: <OperatorStatements />,
              children: [
                { path: "use", element: <UseMain /> },
                { path: "select", element: <SelectMain /> },
                { path: "alias", element: <AliasMain /> },
                { path: "distinct", element: <DistinctMain /> },
                { path: "where", element: <WhereClauseMain /> },
                { path: "logical-operator", element: <LogicalOperatorsMain /> },
                { path: "in", element: <InMain /> },
                { path: "between", element: <BetweenMain /> },
                { path: "like", element: <LikeMain /> },
                { path: "regex", element: <RegexMain /> },
                { path: "is-null", element: <IsNullMain /> },
                { path: "order-by", element: <OrderByMain /> },
                { path: "limit", element: <LimitMain /> },
              ],
            },
          ],
        },
        {
          path: "fastapi",
          element: <FastAPI_page />,
          children: [
            { index: true, element: <FastAPIHome /> },
            { path: "ide", element: <FastAPIIde /> },
            {
              path: "config-env-profiles",
              element: <FastApiConfigurationProfilesEnv />,
            },
            { path: "logging", element: <FastAPILogging /> },
            {
              path: "router",
              element: <FastAPIRouter />,
              children: [
                { path: "main-py", element: <MainPyMain /> },
                { path: "setup-fastapi", element: <SetupFastApiMain /> },
                { path: "pydantic", element: <PydanticMain /> },
              ],
            },
            { path: "exceptions", element: <FastAPIException /> },
            { path: "sqlalchemy", element: <FastAPISQLAlchemy /> },
            { path: "auditing", element: <FastAPIAuditing /> },
            { path: "security", element: <FastAPISecurity /> },
            { path: "caching", element: <FastAPICaching /> },
          ],
        },
        {
          path: "python",
          element: <Python_page />,
          children: [
            { index: true, element: <PythonHome /> },
            {
              path: "general",
              element: <PythonGeneral />,
              children: [
                { path: "create-project", element: <CreateProjectMain /> },
                { path: "python-git", element: <PythonGitMain /> },
              ],
            },
            {
              path: "ide",
              element: <PythonIde />,
              children: [
                { path: "pycharm", element: <PyCharmMain /> },
                { path: "vscode", element: <VsCodeMain /> },
              ],
            },
            {
              path: "python-basics",
              element: <PythonBasics />,
              children: [
                { path: "data-types", element: <DataTypesMain /> },
                { path: "operators", element: <OperatorsMain /> },
                { path: "control-flow", element: <IfElseMain /> },
                { path: "loops", element: <LoopsMain /> },
                { path: "functions", element: <PythonFunctionsMain /> },
                { path: "exceptions", element: <PythonExceptionsMain /> },
                {
                  path: "modules-packaging",
                  element: <ModulesPackagingMain />,
                },
                { path: "file-handling", element: <FileHandlingMain /> },
                { path: "oop", element: <PythonOopMain /> },
                { path: "venv", element: <VenvMain /> },
              ],
            },
            {
              path: "data-structure",
              element: <PythonDataStructure />,
              children: [
                { path: "list", element: <PythonListMain /> },
                { path: "tuple", element: <PythonTupleMain /> },
                { path: "set", element: <PythonSetMain /> },
                { path: "dictionary", element: <PythonDictionaryMain /> },
              ],
            },
            {
              path: "fastapi",
              element: <FastApi />,
              children: [
                { path: "setup-fastapi", element: <SetupFastApiProjectMain /> },
                {
                  path: "folder-structure",
                  element: <FastApiFolderStructureMain />,
                },
                { path: "crud", element: <CRUDMain /> },
                { path: "logging-fastapi", element: <LoggingMain /> },
                {
                  path: "request-and-validation",
                  element: <RequestDataAmdValidationSectionsMain />,
                },
                {
                  path: "response-handling",
                  element: <ResponseHandlingSectionsMain />,
                },
                {
                  path: "dependency-injection",
                  element: <DependencyInjectionMain />,
                },
                { path: "error-handling", element: <ErrorHandlingMain /> },
                { path: "middleware", element: <MiddlewareSectionsMain /> },
                { path: "security", element: <SecurityMain /> },
                {
                  path: "background-tasks-and-async",
                  element: <BackgroundTasksAndAsyncMain />,
                },
                {
                  path: "database-integration",
                  element: <DataBaseIntegrationMain />,
                },
                {
                  path: "application-structure-architecture",
                  element: <ApplicationStructureAndArchitectureMain />,
                },
                { path: "testing", element: <TestingMain /> },
                {
                  path: "performance-concurrency",
                  element: <PerformanceAndConcurrencyMain />,
                },
                {
                  path: "deployment-dev-ops",
                  element: <DeploymentAndDevOpsMain />,
                },
                { path: "advanced-topics", element: <AdvancedTopicsMain /> },
              ],
            },
            {
              path: "django",
              element: <Django />,
              children: [
                { path: "create-django", element: <CreateDjangoProjectMain /> },
                // { path: "vscode", element: <VsCodeMain /> },
              ],
            },
          ],
        },
        {
          path: "devops",
          element: <DevOps_page />,
          children: [
            { index: true, element: <DevOpsHome /> },
            { path: "git", element: <GitMain /> },
            { path: "react-on-spring", element: <ReactOnSpringMain /> },
            { path: "docker", element: <DockerMain /> },
            { path: "netlify", element: <DeployNetlifyMain /> },
            { path: "render", element: <DeployRenderMain /> },
            {
              path: "nginx",
              element: <Nginx />,
              children: [
                { path: "nginx-install", element: <NginxInstallMain /> },
                { path: "maven-create-jar", element: <MavenCreateJarMain /> },
                { path: "deploy-jar", element: <DeployJarNginxMain /> },
                { path: "deploy-react", element: <DeployReactNginxMain /> },
              ],
            },
            {
              path: "tomcat",
              element: <Tomcat />,
              children: [
                { path: "tomcat-install", element: <TomcatInstallMain /> },
                { path: "react-on-tomcat", element: <ReactOnTomcatMain /> },
              ],
            },
            {
              path: "linux-server",
              element: <Linux_Server />,
              children: [
                { path: "create-server", element: <CreateServerMain /> },
                {
                  path: "connect-with-ssh",
                  element: <ConnectToServerSshMain />,
                },
                { path: "connect-with-filezilla", element: <FileZillaMain /> },
                { path: "setup-server", element: <SetupServerMain /> },
                { path: "jdk-install", element: <JdkInstallMain /> },
                { path: "deploy", element: <DeployLinuxMain /> },
                { path: "mysql-install", element: <MySqlnstallMain /> },
                { path: "jenkins-install", element: <JenkinsMain /> },
              ],
            },
          ],
        },
        {
          path: "guitar",
          element: <Guitar_page />,
          children: [
            { index: true, element: <GuitarHome /> },
            {
              path: "general",
              element: <GeneralMain />,
            },
            {
              path: "gipsy-kings",
              element: <GipsyKings />,
              children: [
                { path: "allegria", element: <AllegriaMain /> },
                { path: "love-and-liberte", element: <LoveAndLiberteMain /> },
                { path: "generic", element: <GenericSongsMain /> },
              ],
            },
            {
              path: "flamenco",
              element: <Flamenco />,
              children: [
                // flamenco-basics
                { path: "flamenco-basics", element: <FlamencoBasicsMain /> },
                { path: "solea", element: <SoleaMain /> },
                { path: "rumba", element: <RumbaMain /> },
              ],
            },
            {
              path: "anton-glushkin",
              element: <AntonGlushkinMain />,
            },
          ],
        },
        {
          path: "linux",
          element: <Linux_page />,
          children: [{ index: true, element: <LinuxHome /> }],
        },
        {
          path: "postman",
          element: <Postman_page />,
          children: [
            { index: true, element: <PostmanHome /> },
            { path: "collection", element: <CollectionMain /> },
            {
              path: "environment",
              element: <Environment />,
              children: [
                // { path: "environment-setup", element: <EnvironmentSetupMain /> },
              ],
            },
            {
              path: "multiple-http-requests",
              element: <MultipleHttpRequestMain />,
            },
          ],
        },
        {
          path: "windows",
          element: <Windows_page />,
          children: [
            { index: true, element: <WindowsHome /> },
            { path: "port-check", element: <PortCheckMain /> },
            {
              path: "batch",
              element: <Batch />,
              children: [{ path: "ascii", element: <AsciiMain /> }],
            },
          ],
        },
        {
          path: "page_creation",
          element: <Page_Creation_page />,
          children: [
            { index: true, element: <PageCreationHome /> },
            {
              path: "specification-document",
              element: <SpecificationDocument />,
              children: [{ path: "create-steps", element: <CreateStepMain /> }],
            },
            { path: "app-tree", element: <AppTreeComponent /> },
            { path: "component-tree", element: <ComponentTreeComponent /> },
            { path: "web-page", element: <WebPageComponent /> },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
}

export default App;
