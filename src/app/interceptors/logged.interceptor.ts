import { HttpInterceptorFn } from '@angular/common/http';
import { StateService } from '../services/state/state.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const stateService = inject(StateService);
  const { loginState, token } = stateService.state;

  if (loginState !== 'logged') {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};
