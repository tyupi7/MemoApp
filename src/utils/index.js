import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy/MM/dd HH:mm');
}

export function translateErrors(code) {
  const error = { title: 'エラー', description: '時間をおいてお試し下さい' };
  switch (code) {
    case 'auth/invalid-email':
      error.title = 'メールアドレス';
      error.description = 'メールアドレスが不正です';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが無効です';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザーが見つかりませんでした';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが間違っています';
      break;
    default:
  }
  return error;
}
