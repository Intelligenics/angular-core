//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Intelligenics Ltd.  
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,
/// sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
/// subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// 
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
/// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
/// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// 
/// Contact Information
/// 
/// Name: Matthew Parton M.Sc.
/// Feel free to contact me using the following details

/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
/**
 * Http status codes.
 */
export class HttpStatusCodes
{
    /**
     * zero
     */
    public static readonly Zero: number = 0;

    /**
     * Success
     */
    public static readonly Success: number = 200;

    /**
     * Bad request
     */
    public static readonly BadRequest: number = 400;

    /**
     * Unauthorised error code
     */
    public static readonly Unauthorised: number = 401;

    /**
     * Forbidden
     */
    public static readonly Forbidden: number = 403;

    /**
     * Not found
     */
    public static readonly NotFound: number = 404;

    /**
     * Method not allowed
     */
    public static readonly MethodNotAllowed: number = 405;

    /**
     * Service Unavailable
     */
    public static readonly ServiceUnavailable: number = 503;
}
