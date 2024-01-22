import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="bg-black text-white">
                <div className="flex flex-row items-center justify-between p-8">
                    <div className="w-[380px]">
                        <span className="text-xl font-bold">COOLMATE lắng nghe bạn!</span> <br></br>
                        <span className="text-[12px]">
                            Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể
                            nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                        </span>{' '}
                        <br></br>
                        <div className="mt-4 w-48 rounded-[16px] bg-blue-600 text-center font-semibold">
                            Đóng góp ý kiến
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row items-center">
                            <img src="https://www.coolmate.me/images/footer/icon-hotline.svg" alt="icon" />
                            <p className="ml-4 w-60 cursor-pointer font-bold">
                                1900.272737 - 028.7777.2737 (8:30 - 22:00)
                            </p>
                        </div>
                        <div className="my-4 flex flex-row items-center">
                            <img src="https://www.coolmate.me/images/footer/icon-email.svg" alt="icon" />
                            <p className="ml-4 cursor-pointer font-bold">
                                Email: <br></br>Cool@coolmate.me
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
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
                            className="mr-8 w-8 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                            alt="icon"
                        />
                    </div>
                </div>
                <hr className="border-1 mx-6 border-gray-600"></hr>
                <div className="flex flex-row justify-between p-8">
                    <div>
                        <p className="my-4 font-bold">COOLCLUB</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Đăng kí thành viên</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Ưu đãi & Đặc quyền</p>
                    </div>
                    <div>
                        <p className="my-4 font-bold">CHÍNH SÁCH</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">
                            Chính sách đổi trả 60 ngày
                        </p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách khuyến mãi</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách bảo mật</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Chính sách giao hàng</p>
                    </div>
                    <div>
                        <p className="my-4 font-bold">CHĂM SÓC KHÁCH HÀNG</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">
                            Trải nghiệm mua sắm 100% hài lòng
                        </p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Hỏi đáp - FAQs</p>
                        <p className="my-4 font-bold">KIẾN THỨC MẶC ĐẸP</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Hướng dẫn chọn size</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Blog</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Group mặc đẹp sống chất</p>
                    </div>
                    <div>
                        <p className="my-4 font-bold">TÀI LIỆU - TUYỂN DỤNG</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Tuyển dụng</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Đăng ký bản quyền</p>
                        <p className="my-4 font-bold">VỀ COOLMATE</p>
                        <p className="my-4 text-[12px]">Coolmate 101</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">DVKH xuất sắc</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Câu chuyện về Coolmate</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Nhà máy</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">Care & Share</p>
                    </div>
                    <div className="w-[220px]">
                        <p className="my-4 font-bold">ĐỊA CHỈ LIÊN HỆ</p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">
                            Văn phòng Hà Nội: Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà
                            Đông, TP Hà Nội
                        </p>
                        <p className="my-4 cursor-pointer text-[12px] hover:text-yellow-500">
                            Văn phòng Tp HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
                            Minh
                        </p>
                    </div>
                </div>
                <hr className="border-1 mx-6 border-gray-600"></hr>
                <div className="flex flex-row justify-between p-8">
                    <div>
                        <p className="my-2 text-[12px]">@ CÔNG TY TNHH FASTECH ASIA</p>
                        <p className="my-2 text-[12px]">
                            Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu
                            tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <img
                            className="mr-4 w-16 cursor-pointer object-contain"
                            src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-16 cursor-pointer object-contain"
                            src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-9 cursor-pointer object-contain"
                            src="https://www.coolmate.me/images/footer/Coolmate-info.png"
                            alt="icon"
                        />
                        <img
                            className="mr-4 w-20 cursor-pointer object-contain"
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