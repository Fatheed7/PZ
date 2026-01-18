import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Link } from "react-router-dom";

function SidebarComponent({ visible, onHide }) {
	return (
		<>
			<Sidebar
				className="z-1"
				visible={visible}
				onHide={onHide}
				content={({ closeIconRef, hide }) => (
					<div className="min-h-screen flex relative lg:static">
						<div
							id="app-sidebar-2"
							className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
							style={{ width: "280px" }}
						>
							<div className="flex flex-column h-full bg-black-alpha-90">
								<div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-">
									<span className="inline-flex align-items-center gap-2">
										<svg
											width="35"
											height="40"
											viewBox="0 0 35 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										></svg>
										<span className="font-semibold text-2xl text-primary">
											PZ Tracker
										</span>
									</span>
									<span>
										<Button
											type="button"
											ref={closeIconRef}
											onClick={(e) => hide(e)}
											icon="bi bi-x"
											rounded
											outlined
											className="h-2rem w-2rem"
										></Button>
									</span>
								</div>
								<div className="overflow-y-auto">
									<ul className="list-none p-3 m-0 b">
										<li>
											<StyleClass>
												<ul className="list-none p-0 m-0 overflow-hidden">
													<li>
														<Link
															to="/PZ"
															className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
														>
															<span>📖</span>
															<span className="font-medium">Books</span>
															<Ripple />
														</Link>
													</li>
													<li>
														<Link
															to="/magazine"
															className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
														>
															<span>📰</span>
															<span className="font-medium">Magazines</span>
															<Ripple />
														</Link>
													</li>
												</ul>
												<div className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
													<span className="font-medium">CRAFTING</span>
													<i className="pi pi-chevron-down"></i>
													<Ripple />
												</div>
											</StyleClass>
											<ul className="list-none p-0 m-0 overflow-hidden">
												<li>
													<Link
														to="/blacksmithing"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🔨</span>
														<span className="font-medium">Blacksmithing</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/carpentry"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🛠️</span>
														<span className="font-medium">Carpentry</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/carving"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🔪</span>
														<span className="font-medium">Carving</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/cooking"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🍳</span>
														<span className="font-medium">Cooking</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/electrical"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>⚡</span>
														<span className="font-medium">Electrical</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/glassmaking"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🥛</span>
														<span className="font-medium">Glassmaking</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/knapping"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🗿</span>
														<span className="font-medium">Knapping</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/masonry"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🧱</span>
														<span className="font-medium">Masonry</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/mechanics"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>⚙️</span>
														<span className="font-medium">Mechanics</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/pottery"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🏺</span>
														<span className="font-medium">Pottery</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/tailoring"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>✂️</span>
														<span className="font-medium">Tailoring</span>
														<Ripple />
													</Link>
												</li>
												<li>
													<Link
														to="/welding"
														className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full pz-nav-link"
													>
														<span>🔥</span>
														<span className="font-medium">Welding</span>
														<Ripple />
													</Link>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
			></Sidebar>
		</>
	);
}

export default SidebarComponent;
