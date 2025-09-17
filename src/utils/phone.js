// 서버 전송: 숫자만
export const formatPhoneToServer = (phone) => (phone || "").replace(/\D/g, "");

// 화면: 하이픈 자동 삽입
export const formatPhoneToDisplay = (phone) => {
  const cleaned = (phone || "").replace(/\D/g, "");
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 7) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(
    7,
    11
  )}`;
};

// 전화번호 유효성 검사
export const isValidPhone = (phone) => {
  const cleaned = formatPhoneToServer(phone);
  return cleaned.length === 10 || cleaned.length === 11;
};
