import React from 'react'
import run from '../../assets/svg/run.jpg'

function Footer() {
    return (
        <footer className="bg-black text-white ">
            <div className="my-0 ml-auto mr-auto w-[calc(100%-120px)] bg-black py-6 text-white">
                <div className="flex flex-row justify-between">
                    <div className="w-1/3">
                        <span className="text-xl font-bold">COOLMATE lắng nghe bạn!</span> <br></br>
                        <span className="text-[12px] ">
                            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể
                            nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                        </span>{' '}
                        <br></br>
                        <div className="my-7 w-44 cursor-pointer rounded-[16px] bg-blue-600 py-2.5 text-center font-medium hover:bg-white hover:text-black">
                            Đóng góp ý kiến
                        </div>
                    </div>
                    <div className="w-[22%]">
                        <div className="flex flex-row items-center">
                            <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" alt="icon" />
                            <div className="">
                                <div className="ml-4 text-xs font-semibold">Hotline</div>
                                <p className="ml-4 w-60 cursor-pointer text-base font-bold">
                                    1900.272737 - 028.7777.2737 (8:30 - 22:00)
                                </p>
                            </div>
                        </div>
                        <div className="my-5 flex flex-row items-center">
                            <img src="https://www.coolmate.me/images/footer/icon-email.svg" alt="icon" />
                            <div className="ml-4 cursor-pointer font-bold">
                                <p className="text-xs font-semibold">Email</p>
                                <p>Cool@coolmate.me</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center h-[130px] w-[30%] justify-between">
                        <img
                            className="h-9 mr-8 w-6 cursor-pointer object-contain"
                            src="https://mcdn.coolmate.me/image/June2023/mceclip1_43.png"
                            alt="icon"
                        />
                        <img
                            className="mr-8 w-8 cursor-pointer object-contain"
                            src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
                            alt="icon"
                        />
                        <img
                            className="mr-8 w-8 cursor-pointer object-contain"
                            src="https://mcdn.coolmate.me/image/June2023/mceclip0_62.png"
                            alt="icon"
                        />
                        <img
                            className="mr-8 w-8 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/icon-instar.svg"
                            alt="icon"
                        />
                        <img
                            className="mr-8 w-10 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                            alt="icon"
                        />
                    </div>
                </div>
                <hr className="border-1 mx-0 border-gray-700"></hr>
                <div className="flex flex-row justify-between mt-3 text-sm">
                    <div>
                        <p className="my-5 font-bold">COOLCLUB</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Đăng kí thành viên</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Ưu đãi & Đặc quyền</p>
                    </div>
                    <div>
                        <p className="my-5 font-bold">CHÍNH SÁCH</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">
                            Chính sách đổi trả 60 ngày
                        </p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách khuyến mãi</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách bảo mật</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách giao hàng</p>


                        <p className="mt-8 font-bold">COOLMATE.ME</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">
                        Lịch sử thay đổi website
                        </p>
                    </div>
                    <div>
                        <p className="my-5 font-bold">CHĂM SÓC KHÁCH HÀNG</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">
                            Trải nghiệm mua sắm 100% hài lòng
                        </p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Hỏi đáp - FAQs</p>
                        <p className="mt-8 font-bold">KIẾN THỨC MẶC ĐẸP</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Hướng dẫn chọn size</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Blog</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Group mặc đẹp sống chất</p>
                    </div>
                    <div>
                        <p className="my-5 font-bold">TÀI LIỆU - TUYỂN DỤNG</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Tuyển dụng</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Đăng ký bản quyền</p>
                        <p className="my-5 font-bold mt-8">VỀ COOLMATE</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Coolmate 101</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">DVKH xuất sắc</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Câu chuyện về Coolmate</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Nhà máy</p>
                        <p className="my-5 cursor-pointer text-[12px] hover:text-yellow-500">Care & Share</p>
                    </div>
                    <div className="w-[20%]">
                        <p className="my-5 font-bold">ĐỊA CHỈ LIÊN HỆ</p>
                        <p className="my-6 cursor-pointer text-[12px] hover:text-yellow-500">
                            <i className="not-italic underline decoration-solid ">Văn phòng Hà Nội:</i> Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà
                            Đông, TP Hà Nội
                        </p>
                        <p className="my-8 cursor-pointer text-[12px] hover:text-yellow-500">
                            <i className="not-italic underline decoration-solid ">Văn phòng Tp HCM:</i> Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                            Minh
                        </p>
                    </div>
                </div>
                <hr className="border-1 mx-0 border-gray-700 mt-6"></hr>
                <div className="flex flex-row justify-between mt-2">
                    <di className="w-[60%]">
                        <p className="my-2 text-[12px] text-xs font-normal">@ CÔNG TY TNHH FASTECH ASIA</p>
                        <p className="my-2 text-[12px] text-xs font-normal">
                            Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu
                            tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
                        </p>
                    </di>
                    <div className="flex flex-row">
                        <img
                            className="mr-4 w-24 cursor-pointer object-contain"
                            src="https://media2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-20 cursor-pointer object-contain"
                            src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-11 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/Coolmate-info.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-28 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/logoSaleNoti.png"
                            alt="icon"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
