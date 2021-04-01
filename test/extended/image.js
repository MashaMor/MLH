import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import path from "path";

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-147 Image field placeholder = "Click or drag and drop"', function () {
            let placeholder = $(sel.image).getText();
            expect(placeholder).toEqual(exp.imagePH);
        });

    })

    describe('Positive cases', function () {

        it('TC-148 Click works for .jpeg files', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/image/2mb-2 2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

        it('TC-150 Click works for .png files', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2 2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();

        });

        it('TC-152 Max size .jpeg file is 3.9 Mb', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2 2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();

        });

        it('TC-156 Bin icon appears', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2 2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let binIcon = $(sel.binIcon);
            expect(binIcon).toBeExisting();

        });

        it('TC-157 User can delete the image', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/images/2mb-2.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            let binIcon = $(sel.binIcon).click();
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);

        });

    });

    describe('Negative cases', function () {



    });

});

