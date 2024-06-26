import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from 'react-toastify';

const Jobdetail = ({ deleteJob }) => {
	const { id } = useParams();
	const job = useLoaderData();
	const navigate = useNavigate()
	const onDelete = (jobID) => {
		const confirm = window.confirm("確定要刪除嗎？");

		if (!confirm) return;
		deleteJob(jobID);
		
		toast.success('工作刪除成功！');
		navigate('/jobs')
	};
	return (
		<>
			<section>
				<div className="container m-auto py-6 px-6">
					<Link
						to="/jobs"
						className="text-teal-500 hover:text-teal-600 flex items-center"
					>
						<FaArrowLeft className="mr-2" /> 回去工作版
					</Link>
				</div>
			</section>

			<section className="bg-teal-50">
				<div className="container m-auto py-10 px-6">
					<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
						<main>
							<div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
								<div className="text-gray-500 mb-4">
									{job.type}
								</div>
								<h1 className="text-3xl font-bold mb-4">
									{job.title}
								</h1>
								<div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
									<FaMapMarker className="text-orange-700 mr-1" />
									<p className="text-orange-700">
										{job.location}
									</p>
								</div>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-md mt-6">
								<h3 className="text-teal-800 text-lg font-bold mb-6">
									工作描述
								</h3>

								<p className="mb-4">{job.description}</p>

								<h3 className="text-teal-800 text-lg font-bold mb-2">
									薪水
								</h3>

								<p className="mb-4">{job.salary} / 年</p>
							</div>
						</main>

						{/* <!-- Sidebar --> */}
						<aside>
							<div className="bg-white p-6 rounded-lg shadow-md">
								<h3 className="text-xl font-bold mb-6">
									公司資訊
								</h3>

								<h2 className="text-2xl">{job.c_name}</h2>

								<p className="my-2">
									{job.c_description}
								</p>

								<hr className="my-4" />

								<h3 className="text-xl">聯絡 Email:</h3>

								<p className="my-2 bg-teal-100 p-2 font-bold">
									{job.c_contactEmail}
								</p>

								<h3 className="text-xl">聯絡電話:</h3>

								<p className="my-2 bg-teal-100 p-2 font-bold">
									{" "}
									{job.c_contactPhone}
								</p>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-md mt-6">
								<h3 className="text-xl font-bold mb-6">
									Manage Job
								</h3>
								<Link
									to={`/edit-job/${job._id}`}
									className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
								>
									編輯工作
								</Link>
								<button
									onClick={() => onDelete(job._id)}
									className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
								>
									刪除工作
								</button>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

const jobLoader = async ({ params }) => {
	const res = await fetch(`/api/jobs/${params.id}`);
	const data = await res.json();
	return data;
};
export { Jobdetail as default, jobLoader };
