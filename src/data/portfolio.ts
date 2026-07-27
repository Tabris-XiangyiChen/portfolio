type LocalizedText = {
	en: string;
	cn: string;
};

type ProjectMetric = {
	label: string;
	labelCn: string;
	value: string;
	valueCn: string;
};

export type PortfolioProject = {
	id: string;
	slug: string;
	title: string;
	titleCn: string;
	subtitle: string;
	subtitleCn: string;
	type: string;
	typeCn: string;
	role: string;
	roleCn: string;
	image: string;
	previewGif: string;
	videoFile: string;
	videoUrl: string;
	visual: 'ocean' | 'tank' | 'renderer' | 'dx12';
	summary: string;
	summaryCn: string;
	tags: string[];
	metrics: ProjectMetric[];
	highlights: LocalizedText[];
};

export const profile = {
	name: 'Xiangyi Chen',
	nameCn: '陈相屹',
	role: 'Game Engineering Portfolio',
	roleCn: '游戏工程作品集',
	headline: 'UE5 C++ gameplay systems, real-time rendering, and graphics programming projects.',
	headlineCn: '展示 UE5 C++ 玩法系统、实时渲染和底层图形编程项目。',
	intro:
		'I am a game engineering graduate focused on Unreal Engine, C++ gameplay systems, rendering, and graphics programming. This portfolio is designed to make each project easy to inspect through media, responsibilities, and implementation notes.',
	introCn:
		'我是一名游戏工程方向硕士毕业生，主要关注 Unreal Engine、C++ 玩法系统、实时渲染和图形底层实现。这个作品集会用项目画面、个人职责和实现拆解，让 HR 和面试官都能快速理解我做过什么、解决了什么问题。',
	email: '1113064699@qq.com',
	github: 'https://github.com/Tabris-XiangyiChen',
	resumeUrl: 'assets/documents/XiangyiChen_GameEngine_CV_zh.pdf',
};

export const uiText = {
	languageShortCn: '中文',
	languageShortEn: 'EN',
	resume: { en: 'Resume', cn: '简历' },
	viewProjects: { en: 'View Projects', cn: '查看项目' },
	contact: { en: 'Contact', cn: '联系我' },
	viewDetails: { en: 'View Details', cn: '查看详情' },
	selectedProjects: { en: 'Selected Projects', cn: '项目展示' },
	selectedProjectsTitle: {
		en: 'Animated previews for the work that matters most',
		cn: '用动态预览快速理解每个项目',
	},
	selectedProjectsBody: {
		en: 'Each card opens a project detail page. GIF previews are used when available; static images and styled placeholders remain as fallback media.',
		cn: '每个卡片都可以进入详情页。已有素材会优先显示 GIF 动态预览，没有素材的项目会先使用占位视觉，后续只需要替换媒体文件。',
	},
	techStack: { en: 'Tech Stack', cn: '技能栈' },
	techTitle: { en: 'Readable engineering signals', cn: '可以快速判断能力方向的技术标签' },
	about: { en: 'About', cn: '关于我' },
	aboutTitle: {
		en: 'Game systems, rendering, and engine-level practice.',
		cn: '我关注玩法系统、渲染技术和引擎层工程实践。',
	},
	aboutBody: {
		en: 'I want this portfolio to show not only what I made, but also what engineering problems each project solved: how gameplay data is organized, how systems are decoupled, how rendering techniques are implemented, and how results can be evaluated.',
		cn: '我希望这个作品集不只是展示“做过什么”，也能说明每个项目里解决了什么工程问题：玩法数据如何组织，系统之间如何解耦，渲染算法如何落地，以及效果和性能如何被验证。',
	},
	contactTitle: {
		en: 'Open to game engine and graphics roles.',
		cn: '希望寻找游戏客户端、引擎、图形渲染相关岗位。',
	},
	contactBody: {
		en: 'You can continue through email, GitHub, or the attached resume.',
		cn: '如果你正在查看这个网站，可以通过邮箱、GitHub 或简历继续了解我的项目。',
	},
	backHome: { en: 'Back Home', cn: '返回首页' },
	allProjects: { en: 'All Projects', cn: '全部项目' },
	myRole: { en: 'My Role', cn: '我的职责' },
	keyMetrics: { en: 'Key Metrics', cn: '关键信息' },
	technicalHighlights: { en: 'Technical Highlights', cn: '技术亮点' },
	demonstrates: { en: 'What this project demonstrates', cn: '这个项目体现了什么能力' },
	mediaBreakdown: { en: 'Project Breakdown', cn: '项目拆解' },
	mediaBreakdownBody: {
		en: 'This section is reserved for a short gameplay video, architecture diagram, performance comparison, or report link. The current version keeps the structure ready while project media is being prepared.',
		cn: '这里后续适合补充玩法视频、架构图、性能对比或报告链接。当前版本先保留清晰的详情页结构，等你整理好项目视频和截图后可以直接替换。',
	},
	continue: { en: 'Continue', cn: '继续浏览' },
	otherProjects: { en: 'Other project dossiers', cn: '其他项目详情' },
	watchVideo: { en: 'Watch Video', cn: '观看视频' },
	videoReady: { en: 'Playable Demo', cn: '可播放演示' },
	mediaPreview: { en: 'Media Preview', cn: '项目画面' },
};

export const navItems = [
	{ href: '#home', label: 'Home', labelCn: '主页' },
	{ href: '#projects', label: 'Projects', labelCn: '项目' },
	{ href: '#tech-stack', label: 'Tech Stack', labelCn: '技能' },
	{ href: '#about', label: 'About', labelCn: '关于' },
	{ href: '#contact', label: 'Contact', labelCn: '联系' },
];

export const heroStats = [
	{
		label: 'Primary Stack',
		labelCn: '主要技术',
		value: 'UE5 / C++ / HLSL',
		valueCn: 'UE5 / C++ / HLSL',
	},
	{
		label: 'Focus',
		labelCn: '求职方向',
		value: 'Engine · Rendering · Gameplay',
		valueCn: '引擎 · 渲染 · 玩法',
	},
	{
		label: 'Showcase Format',
		labelCn: '展示方式',
		value: 'GIF Previews + Detail Pages',
		valueCn: 'GIF 预览 + 详情页',
	},
];

export const skillGroups = [
	{
		title: 'Programming',
		titleCn: '编程基础',
		code: 'CORE.LANG',
		items: ['C/C++', 'Python', 'HLSL', 'OOP', 'Data Structures'],
	},
	{
		title: 'Unreal Engine',
		titleCn: 'Unreal Engine',
		code: 'ENGINE.UE5',
		items: ['Actor Component', 'DataAsset', 'DataTable', 'Delegate', 'Timer', 'Niagara', 'UMG'],
	},
	{
		title: 'Rendering',
		titleCn: '图形渲染',
		code: 'RENDER.PIPELINE',
		items: ['DirectX 12', 'PBR', 'Ray Tracing', 'BVH', 'MIS', 'Soft Rasterization', 'SIMD'],
	},
	{
		title: 'Tools',
		titleCn: '开发工具',
		code: 'TOOLS.DEBUG',
		items: ['Visual Studio', 'Git/GitHub', 'RenderDoc', 'PIX', 'Windows C++'],
	},
];

export const projects: PortfolioProject[] = [
	{
		id: '01',
		slug: 'fishing-master',
		title: 'Fishing Master',
		titleCn: 'Fishing Master',
		subtitle: 'FFT Ocean Rendering & Fishing Gameplay',
		subtitleCn: '海面模拟与钓鱼玩法实现',
		type: 'Personal Project',
		typeCn: '个人项目',
		role: 'Gameplay / Rendering Programmer',
		roleCn: '玩法与渲染程序',
		image: 'assets/projects/fishing-master/cover.png',
		previewGif: 'assets/projects/fishing-master/preview.gif',
		videoFile: '',
		videoUrl: '',
		visual: 'ocean',
		summary:
			'An Unreal Engine 5 project that combines an open-water fishing loop with GPU FFT ocean simulation and boat-water interaction feedback.',
		summaryCn:
			'基于 UE5 C++ 实现开放海面钓鱼玩法，并结合 GPU FFT Ocean 模拟构建可交互的海面和船体反馈。',
		tags: ['UE5', 'C++', 'HLSL', 'FFT Ocean', 'DataTable', 'Delegate'],
		metrics: [
			{ label: 'Ocean', labelCn: '海面模拟', value: 'JONSWAP', valueCn: 'JONSWAP' },
			{
				label: 'Pipeline',
				labelCn: '渲染流程',
				value: 'Compute Shader',
				valueCn: 'Compute Shader',
			},
			{ label: 'Gameplay', labelCn: '玩法循环', value: 'Fishing Loop', valueCn: 'Fishing Loop' },
		],
		highlights: [
			{
				en: 'Built fish spawning, rod state flow, QTE and Fever Mode, quest tracking, and UI updates.',
				cn: '实现鱼群生成、鱼竿状态流程、QTE / Fever Mode、任务追踪和 UI 更新。',
			},
			{
				en: 'Used DataTable and DataAsset to drive fish data, quests, and gameplay parameters.',
				cn: '使用 DataTable / DataAsset 管理鱼类、任务和玩法参数，方便后续扩展。',
			},
			{
				en: 'Implemented dynamic ocean rendering with JONSWAP, Butterfly IFFT, Clipmap Mesh, and Single Layer Water.',
				cn: '基于 JONSWAP、Butterfly IFFT、Clipmap Mesh 和 Single Layer Water 实现动态海面。',
			},
		],
	},
	{
		id: '02',
		slug: 'tank-combat-system',
		title: 'Tank Combat System',
		titleCn: 'Tank Combat System',
		subtitle: 'Weapon, Health, Skill & VFX Modules',
		subtitleCn: '坦克战斗中的武器、生命值、技能和特效模块',
		type: 'Team Project',
		typeCn: '多人团队项目',
		role: 'Responsible for weapon, health, skill flow, and Niagara VFX integration',
		roleCn: '负责武器系统、生命值组件、技能流程和 Niagara 特效接入',
		image: '',
		previewGif: '',
		videoFile: '',
		videoUrl: '',
		visual: 'tank',
		summary:
			'A team project combat module focused on data-driven weapons, reusable health logic, skill state flow, and combat feedback.',
		summaryCn:
			'这是团队项目中的战斗模块，我主要负责数据驱动武器系统、通用生命值组件、技能流程和战斗特效反馈。',
		tags: ['UE5', 'C++', 'DataAsset', 'Damage Framework', 'Niagara', 'FSM'],
		metrics: [
			{
				label: 'Weapon',
				labelCn: '武器系统',
				value: 'Hitscan / Projectile',
				valueCn: 'Hitscan / Projectile',
			},
			{
				label: 'Damage',
				labelCn: '伤害处理',
				value: 'Health Component',
				valueCn: 'Health Component',
			},
			{ label: 'Skill', labelCn: '技能流程', value: 'Orbital Strike', valueCn: 'Orbital Strike' },
		],
		highlights: [
			{
				en: 'Wrapped weapon configuration with UPrimaryDataAsset and UWeaponManagerComponent.',
				cn: '使用 UPrimaryDataAsset 和 UWeaponManagerComponent 封装武器配置。',
			},
			{
				en: 'Decoupled damage, UI, and VFX through the Unreal Damage Framework and multicast delegates.',
				cn: '通过 UE Damage Framework 和 Multicast Delegates 解耦伤害、UI 和 VFX。',
			},
			{
				en: 'Implemented the Orbital Strike skill flow with FSM states and FTimerHandle timing.',
				cn: '通过 FSM 状态和 FTimerHandle 定时器实现 Orbital Strike 技能流程。',
			},
		],
	},
	{
		id: '03',
		slug: 'global-illumination-renderer',
		title: 'Global Illumination Renderer',
		titleCn: 'Global Illumination Renderer',
		subtitle: 'PBR, BVH, MIS & Denoising',
		subtitleCn: '物理渲染、加速结构、采样优化和降噪',
		type: 'Personal Project',
		typeCn: '个人项目',
		role: 'Rendering Programmer',
		roleCn: '渲染程序',
		image: 'assets/projects/cg-demo/cover.png',
		previewGif: 'assets/projects/cg-demo/preview.gif',
		videoFile: '',
		videoUrl: '',
		visual: 'renderer',
		summary:
			'A C++ physically based renderer covering material models, light transport, acceleration structures, sampling, and AI denoising.',
		summaryCn:
			'使用 C++ 实现物理渲染器，覆盖材质模型、光线传输、加速结构、采样优化和 AI 降噪。',
		tags: ['C++', 'PBR', 'GGX', 'BVH', 'MIS', 'OIDN'],
		metrics: [
			{
				label: 'BSDF',
				labelCn: '材质模型',
				value: 'GGX / Oren-Nayar',
				valueCn: 'GGX / Oren-Nayar',
			},
			{
				label: 'Accel',
				labelCn: '加速结构',
				value: 'Binned SAH BVH',
				valueCn: 'Binned SAH BVH',
			},
			{ label: 'Denoise', labelCn: '降噪', value: 'Intel OIDN', valueCn: 'Intel OIDN' },
		],
		highlights: [
			{
				en: 'Implemented GGX, Oren-Nayar, Plastic BSDF, and other material models.',
				cn: '实现 GGX、Oren-Nayar、Plastic BSDF 等材质模型。',
			},
			{
				en: 'Extended light transport with Light Tracing and Instant Radiosity / VPL support.',
				cn: '扩展 Light Tracing 和 Instant Radiosity / VPL，用于支持间接光照。',
			},
			{
				en: 'Reduced noise and render time with MIS, environment light importance sampling, and tile-based multithreading.',
				cn: '结合 MIS、环境光重要性采样和 Tile-based 多线程，降低噪声并提升渲染效率。',
			},
		],
	},
	{
		id: '04',
		slug: 'dx12-renderer-soft-rasterizer',
		title: 'DX12 Renderer + Soft Rasterizer',
		titleCn: 'DX12 Renderer + Soft Rasterizer',
		subtitle: 'Low-level Graphics Programming',
		subtitleCn: 'DirectX 12 渲染管线与 CPU 软光栅器',
		type: 'Personal Project',
		typeCn: '个人项目',
		role: 'Engine / Graphics Programmer',
		roleCn: '引擎与图形程序',
		image: '',
		previewGif: '',
		videoFile: '',
		videoUrl: '',
		visual: 'dx12',
		summary:
			'A low-level graphics project around DirectX 12 pipeline setup and a CPU software rasterizer with performance optimization experiments.',
		summaryCn:
			'围绕 DirectX 12 渲染管线和 CPU 软光栅器实现底层图形特性，并进行性能优化实验。',
		tags: ['C++', 'DirectX 12', 'HLSL', 'POM', 'Instancing', 'AVX2'],
		metrics: [
			{
				label: 'Pipeline',
				labelCn: '渲染管线',
				value: 'PSO / Root Signature',
				valueCn: 'PSO / Root Signature',
			},
			{ label: 'Buffer', labelCn: '资源管理', value: 'Ring Buffer', valueCn: 'Ring Buffer' },
			{ label: 'SIMD', labelCn: '并行优化', value: 'SSE / AVX2', valueCn: 'SSE / AVX2' },
		],
		highlights: [
			{
				en: 'Managed PSO, Root Signature, Descriptor Heap, and Shader Reflection.',
				cn: '管理 PSO、Root Signature、Descriptor Heap 和 Shader Reflection。',
			},
			{
				en: 'Implemented Normal Mapping, Parallax Occlusion Mapping, and GPU Instancing.',
				cn: '实现 Normal Mapping、Parallax Occlusion Mapping 和 GPU Instancing。',
			},
			{
				en: 'Optimized the software rasterizer using SoA, SSE / AVX2, tile binning, and a thread pool.',
				cn: '使用 SoA、SSE / AVX2、Tile Binning 和线程池优化 CPU 软光栅流程。',
			},
		],
	},
];
