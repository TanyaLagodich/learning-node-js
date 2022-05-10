// in browser global object is Window

// in node.js https://nodejs.org/api/globals.html

// global is analog of Window in browser
// console.log(global);
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 39.32800006866455,
      nodeStart: 0.6318000555038452,
      v8Start: 3.0052000284194946,
      bootstrapComplete: 30.115100026130676,
      environment: 15.6007000207901,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1652187832151.349
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone]
} */}

// setTimeout(() => {
//     console.log('Hello!');
// }, 2000);

console.log(__dirname); // D:\projects\learning-node-js

console.log(__filename); // D:\projects\learning-node-js\global.js (path to file + file name + extension)

console.log(process);
//process {
//     version: 'v17.8.0',
//     versions: {
//       node: '17.8.0',
//       v8: '9.6.180.15-node.16',
//       uv: '1.43.0',
//       zlib: '1.2.11',
//       brotli: '1.0.9',
//       ares: '1.18.1',
//       modules: '102',
//       nghttp2: '1.47.0',
//       napi: '8',
//       llhttp: '6.0.4',
//       openssl: '3.0.2+quic',
//       cldr: '40.0',
//       icu: '70.1',
//       tz: '2021a3',
//       unicode: '14.0',
//       ngtcp2: '0.1.0-DEV',
//       nghttp3: '0.1.0-DEV'
//     },
//     arch: 'x64',
//     platform: 'win32',
//     release: {
//       name: 'node',
//       sourceUrl: 'https://nodejs.org/download/release/v17.8.0/node-v17.8.0.tar.gz',
//       headersUrl: 'https://nodejs.org/download/release/v17.8.0/node-v17.8.0-headers.tar.gz',
//       libUrl: 'https://nodejs.org/download/release/v17.8.0/win-x64/node.lib'
//     },
//     _rawDebug: [Function: _rawDebug],
//     moduleLoadList: [
//       'Internal Binding native_module',
//       'Internal Binding errors',
//       'NativeModule internal/errors',
//       'Internal Binding config',
//       'Internal Binding timers',
//       'Internal Binding async_wrap',
//       'Internal Binding constants',
//       'Internal Binding util',
//       'Internal Binding types',
//       'NativeModule internal/util',
//       'NativeModule internal/util/types',
//       'NativeModule internal/validators',
//       'NativeModule internal/promise_hooks',
//       'Internal Binding task_queue',
//       'Internal Binding symbols',
//       'NativeModule internal/async_hooks',
//       'NativeModule internal/linkedlist',
//       'NativeModule internal/priority_queue',
//       'NativeModule internal/assert',
//       'Internal Binding icu',
//       'NativeModule internal/util/inspect',
//       'NativeModule internal/util/debuglog',
//       'NativeModule internal/timers',
//       'NativeModule events',
//       'Internal Binding buffer',
//       'Internal Binding string_decoder',
//       'NativeModule internal/buffer',
//       'Internal Binding blob',
//       'NativeModule internal/encoding',
//       'Internal Binding messaging',
//       'NativeModule internal/worker/js_transferable',
//       'NativeModule internal/constants',
//       'NativeModule internal/blob',
//       'NativeModule buffer',
//       'NativeModule internal/modules/esm/handle_process_exit',
//       'Internal Binding process_methods',
//       'NativeModule internal/process/per_thread',
//       'Internal Binding credentials',
//       'NativeModule internal/process/promises',
//       'NativeModule internal/fixed_queue',
//       'NativeModule async_hooks',
//       'NativeModule internal/process/task_queues',
//       'Internal Binding trace_events',
//       'NativeModule internal/console/constructor',
//       'NativeModule internal/console/global',
//       'NativeModule internal/util/inspector',
//       'Internal Binding inspector',
//       'NativeModule internal/querystring',
//       'NativeModule path',
//       'NativeModule querystring',
//       'Internal Binding url',
//       'NativeModule internal/url',
//       'NativeModule util',
//       'Internal Binding performance',
//       'NativeModule internal/perf/utils',
//       'NativeModule internal/event_target',
//       'NativeModule timers',
//       'NativeModule internal/abort_controller',
//       'Internal Binding worker',
//       'NativeModule internal/streams/utils',
//       'NativeModule internal/streams/end-of-stream',
//       'NativeModule internal/streams/operators',
//       'NativeModule internal/streams/destroy',
//       'NativeModule internal/streams/legacy',
//       'NativeModule internal/streams/add-abort-signal',
//       'NativeModule internal/streams/buffer_list',
//       'NativeModule internal/streams/state',
//       'NativeModule string_decoder',
//       'NativeModule internal/streams/from',
//       'NativeModule internal/streams/readable',
//       'NativeModule internal/streams/writable',
//       'NativeModule internal/streams/duplex',
//       'NativeModule internal/streams/pipeline',
//       'NativeModule internal/streams/compose',
//       'NativeModule stream/promises',
//       'NativeModule internal/streams/transform',
//       'NativeModule internal/streams/passthrough',
//       'NativeModule stream',
//       'NativeModule internal/worker/io',
//       'NativeModule internal/perf/performance_entry',
//       'NativeModule internal/perf/observe',
//       'NativeModule internal/perf/nodetiming',
//       'NativeModule internal/structured_clone',
//       'NativeModule internal/perf/usertiming',
//       'NativeModule internal/perf/event_loop_utilization',
//       'NativeModule internal/histogram',
//       'NativeModule internal/perf/timerify',
//       'NativeModule internal/perf/performance',
//       'NativeModule internal/perf/event_loop_delay',
//       'NativeModule perf_hooks',
//       'NativeModule internal/process/execution',
//       'NativeModule internal/process/warning',
//       'Internal Binding fs',
//       'NativeModule internal/fs/utils',
//       'Internal Binding fs_dir',
//       'NativeModule internal/fs/dir',
//       'Internal Binding fs_event_wrap',
//       'Internal Binding uv',
//       'NativeModule internal/fs/watchers',
//       'NativeModule internal/fs/read_file_context',
//       ... 64 more items
//     ],
//     binding: [Function: binding],
//     _linkedBinding: [Function: _linkedBinding],
//     _events: [Object: null prototype] {
//       newListener: [Function: startListeningIfSignal],
//       removeListener: [Function: stopListeningIfSignal],
//       warning: [Function: onWarning],
//       SIGWINCH: [Function (anonymous)]
//     },
//     _eventsCount: 4,
//     _maxListeners: undefined,
//     domain: null,
//     _exiting: false,
//     config: [Getter/Setter],
//     dlopen: [Function: dlopen],
//     uptime: [Function: uptime],
//     _getActiveRequests: [Function: _getActiveRequests],
//     _getActiveHandles: [Function: _getActiveHandles],
//     getActiveResourcesInfo: [Function (anonymous)],
//     reallyExit: [Function: reallyExit],
//     _kill: [Function: _kill],
//     cpuUsage: [Function: cpuUsage],
//     resourceUsage: [Function: resourceUsage],
//     memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
//     kill: [Function: kill],
//     exit: [Function: exit],
//     hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
//     openStdin: [Function (anonymous)],
//     allowedNodeEnvironmentFlags: [Getter/Setter],
//     assert: [Function: deprecated],
//     features: {
//       inspector: true,
//       debug: false,
//       uv: true,
//       ipv6: true,
//       tls_alpn: true,
//       tls_sni: true,
//       tls_ocsp: true,
//       tls: true,
//       cached_builtins: [Getter]
//     },
//     _fatalException: [Function (anonymous)],
//     setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
//     hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
//     emitWarning: [Function: emitWarning],
//     nextTick: [Function: nextTick],
//     _tickCallback: [Function: runNextTicks],
//     _debugProcess: [Function: _debugProcess],
//     _debugEnd: [Function: _debugEnd],
//     _startProfilerIdleNotifier: [Function (anonymous)],
//     _stopProfilerIdleNotifier: [Function (anonymous)],
//     stdout: [Getter],
//     stdin: [Getter],
//     stderr: [Getter],
//     abort: [Function: abort],
//     umask: [Function: wrappedUmask],
//     chdir: [Function: wrappedChdir],
//     cwd: [Function: wrappedCwd],
//     env: {
//       ALLUSERSPROFILE: 'C:\\ProgramData',
//       APPDATA: 'C:\\Users\\tanya\\AppData\\Roaming',
//       ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
//       ChocolateyLastPathUpdate: '132933964741277213',
//       CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_76200_QRMFCIRYGZMELMTM',
//       CommonProgramFiles: 'C:\\Program Files\\Common Files',
//       'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//       CommonProgramW6432: 'C:\\Program Files\\Common Files',
//       COMPUTERNAME: 'LAPTOP-OGMD5773',
//       ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
//       DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//       HOMEDRIVE: 'C:',
//       HOMEPATH: '\\Users\\tanya',
//       LOCALAPPDATA: 'C:\\Users\\tanya\\AppData\\Local',
//       LOGONSERVER: '\\\\LAPTOP-OGMD5773',
//       NUMBER_OF_PROCESSORS: '8',
//       OneDrive: 'C:\\Users\\tanya\\OneDrive',
//       OneDriveConsumer: 'C:\\Users\\tanya\\OneDrive',
//       OnlineServices: 'Online Services',
//       ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
//       OS: 'Windows_NT',
//       Path: 'C:\\Python310\\Scripts\\;C:\\Python310\\;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;D:\\yarn\\bin\\;D:\\Git\\cmd;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files (x86)\\dotnet\\;C:\\Program Files\\WireGuard\\;D:\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Users\\tanya\\AppData\\Local\\Programs\\Python\\Python38\\Scripts\\;C:\\Users\\tanya\\AppData\\Local\\Programs\\Python\\Python38\\;C:\\Users\\tanya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\tanya\\AppData\\Local\\Yarn\\bin;D:\\projects\\Microsoft VS Code\\bin;C:\\Users\\tanya\\AppData\\Roaming\\npm;D:\\hyperjs\\resources\\bin',
//       PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL',
//       platformcode: 'KV',
//       PROCESSOR_ARCHITECTURE: 'AMD64',
//       PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 158 Stepping 10, GenuineIntel',
//       PROCESSOR_LEVEL: '6',
//       PROCESSOR_REVISION: '9e0a',
//       ProgramData: 'C:\\ProgramData',
//       ProgramFiles: 'C:\\Program Files',
//       'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//       ProgramW6432: 'C:\\Program Files',
//       PSModulePath: 'C:\\Users\\tanya\\OneDrive\\Документы\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules',
//       PUBLIC: 'C:\\Users\\Public',
//       RegionCode: 'EMEA',
//       SESSIONNAME: 'Console',
//       SystemDrive: 'C:',
//       SystemRoot: 'C:\\WINDOWS',
//       TEMP: 'C:\\Users\\tanya\\AppData\\Local\\Temp',
//       TMP: 'C:\\Users\\tanya\\AppData\\Local\\Temp',
//       USERDOMAIN: 'LAPTOP-OGMD5773',
//       USERDOMAIN_ROAMINGPROFILE: 'LAPTOP-OGMD5773',
//       USERNAME: 'tanya',
//       USERPROFILE: 'C:\\Users\\tanya',
//       windir: 'C:\\WINDOWS',
//       TERM_PROGRAM: 'vscode',
//       TERM_PROGRAM_VERSION: '1.67.0',
//       LANG: 'ru_RU.UTF-8',
//       COLORTERM: 'truecolor',
//       VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-2160c0d954-sock',
//       VSCODE_GIT_ASKPASS_NODE: 'D:\\projects\\Microsoft VS Code\\Code.exe',
//       VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
//       VSCODE_GIT_ASKPASS_MAIN: 'd:\\projects\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
//       GIT_ASKPASS: 'd:\\projects\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh'
//     },
//     title: 'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
//     argv: [ 'D:\\nodejs\\node.exe', 'D:\\projects\\learning-node-js\\global' ],
//     execArgv: [],
//     pid: 52044,
//     ppid: 69464,
//     execPath: 'D:\\nodejs\\node.exe',
//     debugPort: 9229,
//     argv0: 'D:\\nodejs\\node.exe',
//     _preload_modules: [],
//     report: [Getter],
//     setSourceMapsEnabled: [Function: setSourceMapsEnabled],
//     mainModule: Module {
//       id: '.',
//       path: 'D:\\projects\\learning-node-js',
//       exports: {},
//       filename: 'D:\\projects\\learning-node-js\\global.js',
//       loaded: false,
//       children: [],
//       paths: [
//         'D:\\projects\\learning-node-js\\node_modules',
//         'D:\\projects\\node_modules',
//         'D:\\node_modules'
//       ]
//     },
//     [Symbol(kCapture)]: false
//   }


//https://nodejs.org/docs/latest/api/process.html#processargv
console.log(process.argv);

console.log(`Hello, ${process.argv[2]}`); 
// input: node global Tanya 
// output: Hello, Tanya

const url = new URL('https://google.com/path/to#hash');
console.log(url);
// URL {
//     href: 'https://google.com/path/to#hash',
//     origin: 'https://google.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'google.com',
//     hostname: 'google.com',
//     port: '',
//     pathname: '/path/to',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: '#hash'
//   }
console.log(url.hostname); // google.com
console.log(url.href); // https://google.com/path/to#hash
console.log(url.pathname); // /path/to
console.log(url.hash); // #hash
